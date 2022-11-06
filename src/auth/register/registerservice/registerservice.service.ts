import { Injectable } from '@nestjs/common';
import { RegisterUser } from 'src/dtos/User.dto';
import { PrismaLogicService } from 'src/prisma-logic/prisma-logic.service';
import { encrypt } from 'src/utils/bcrypt';

@Injectable()
export class RegisterserviceService {

    constructor(private readonly prisma: PrismaLogicService) { }

    async getAllUsers() {
        const users = await this.prisma.user.findMany({
            include: {
                comments: true
            }
        })
        return users
    }

    async createUser(data: RegisterUser) {

        const { username, password } = data
        const user = await this.prisma.user.findUnique({
            where: {
                username
            }
        })
        if (!user) {
            const hashedPassword = await encrypt(password)
            const newUser = await this.prisma.user.create({
                data: {
                    username,
                    password: hashedPassword
                }
            })
            return newUser;
        }
    }
}
