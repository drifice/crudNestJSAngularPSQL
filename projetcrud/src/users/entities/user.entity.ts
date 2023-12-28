/* eslint-disable prettier/prettier */
import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity()
@Unique(['username', 'email'])
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 50, nullable: false })
    @IsNotEmpty({ message: 'Le nom d\'utilisateur ne peut pas être vide' })
    username: string;

    @Column({ length: 100, nullable: false })
    @IsNotEmpty({ message: 'L\'adresse e-mail ne peut pas être vide' })
    @IsEmail({}, { message: 'L\'adresse e-mail doit être valide' })
    email: string;

    @Column({ length: 100, nullable: false })
    @IsNotEmpty({ message: 'Le mot de passe ne peut pas être vide' })
    @MinLength(6, { message: 'Le mot de passe doit avoir au moins 6 caractères' })
    password: string;
}