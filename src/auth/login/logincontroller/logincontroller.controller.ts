import { Controller, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { RegisterUser } from 'src/dtos/User.dto';
import { LoginserviceService } from '../loginservice/loginservice.service';

@Controller('login')
export class LogincontrollerController {

    constructor(private readonly loginServic: LoginserviceService) { }

    @Post()
    async login(@Body() user: RegisterUser) {
        const loginUser = await this.loginServic.login(user)
        if (loginUser) {
            return loginUser
        } else {
            throw new HttpException('User Not Exist', HttpStatus.NOT_FOUND)
        }
    }


}
