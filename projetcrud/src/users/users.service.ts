/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './user.entity';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) { }

    async findAll(): Promise<User[]> {
        return this.userRepository.find();
    }

    async findOne(id: number): Promise<User> {
        const user = await this.userRepository.findOne({
            where: [
                { id: id }
            ],
        });
        if (!user) {
            throw new NotFoundException(`User with ID ${id} not found`);
        }
        return user;
    }

    async create(createUserDto: CreateUserDto): Promise<User> {
        const user = await this.userRepository.create(createUserDto);
        return this.userRepository.save(user);
    }

    async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
        await this.findOne(id); // Vérifie si l'utilisateur existe
        await this.userRepository.update(id, updateUserDto);
        return this.userRepository.findOne({
            where: [
                { id: id }
            ],
        });
    }

    async remove(id: number): Promise<void> {
        const user = await this.findOne(id); // Vérifie si l'utilisateur existe
        await this.userRepository.remove(user);
    }
}
