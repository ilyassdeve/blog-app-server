import { IsNotEmpty, IsEmail, IsString } from "class-validator"

export class RegisterUser {

    @IsNotEmpty()
    username: string


    @IsNotEmpty()
    @IsString()
    password: string
}