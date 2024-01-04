/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, InternalServerErrorException, Param, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from './user.entity';

@ApiTags('users')
@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) { }

    @Get()
    @ApiOperation({ summary: 'Get all users' })
    @ApiResponse({ status: 200, description: 'List of all users', type: User, isArray: true })
    findAll() {
        return this.userService.findAll();
    }

    @Get(':id')
    @ApiOperation({ summary: 'Get a user by ID' })
    @ApiResponse({ status: 200, description: 'The found user', type: User })
    @ApiResponse({ status: 404, description: 'User not found' })
    @ApiParam({ name: 'id', description: 'User ID' })
    findOne(@Param('id') id: string) {
        return this.userService.findOne(+id);
    }

    @ApiOperation({ summary: 'Create a new user' })
    @ApiResponse({ status: 201, description: 'User created', type: User })
    @ApiResponse({ status: 400, description: 'Bad request' })
    @ApiBody({ type: CreateUserDto })
    @Post()
    async createUser(@Body() createUserDto: CreateUserDto) {
        try {
            const createdUser = await this.userService.create(createUserDto);
            return createdUser;
        } catch (error) {
            console.error(error); // Log l'erreur dans la console
            throw new InternalServerErrorException('Erreur lors de la création de l\'utilisateur');
        }
    }

    @ApiOperation({ summary: 'Update user by ID' })
    @ApiResponse({ status: 200, description: 'User updated', type: User })
    @ApiResponse({ status: 404, description: 'User not found' })
    @ApiBody({ type: UpdateUserDto })
    @ApiParam({ name: 'id', description: 'User ID' })
    @Put(':id')
    @ApiOperation({ summary: 'Modify a user' })
    update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
        return this.userService.update(+id, updateUserDto);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Delete a user' })
    @ApiResponse({ status: 200, description: 'User deleted' })
    @ApiResponse({ status: 404, description: 'User not found' })
    @ApiParam({ name: 'id', description: 'User ID' })
    remove(@Param('id') id: string) {
        return this.userService.remove(+id);
    }
}
