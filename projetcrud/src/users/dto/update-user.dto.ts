/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsEmail, MinLength } from 'class-validator';

export class UpdateUserDto {
    @IsNotEmpty({ message: 'Le nom d\'utilisateur ne peut pas être vide' })
    username: string;

    @IsNotEmpty({ message: 'L\'adresse e-mail ne peut pas être vide' })
    @IsEmail({}, { message: 'L\'adresse e-mail doit être valide' })
    email: string;

    @IsNotEmpty({ message: 'Le mot de passe ne peut pas être vide' })
    @MinLength(6, { message: 'Le mot de passe doit avoir au moins 6 caractères' })
    password: string;
}