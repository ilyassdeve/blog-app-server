import { Body, Controller, Post, UsePipes, ValidationPipe, HttpException, HttpStatus, Get } from '@nestjs/common';
import { RegisterserviceService } from '../registerservice/registerservice.service';
import { User } from '@prisma/client'
import { RegisterUser } from 'src/dtos/User.dto';


@Controller('register')
export class RegistercontrollerController {

    constructor(private readonly registerServic: RegisterserviceService) { }

    @Get()
    async getAllUsers() {
        return this.registerServic.getAllUsers()
    }

    @UsePipes(ValidationPipe)
    @Post('create')
    async createUser(@Body() registeringUser: RegisterUser): Promise<User> {
        const user = await this.registerServic.createUser(registeringUser)
        if (user) {
            return user
        } else {
            throw new HttpException('User Already Exist', HttpStatus.NOT_FOUND)
        }
    }

}
