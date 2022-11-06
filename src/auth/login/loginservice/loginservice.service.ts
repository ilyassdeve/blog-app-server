import { Injectable } from '@nestjs/common';
import { RegisterUser } from 'src/dtos/User.dto';
import { PrismaLogicService } from 'src/prisma-logic/prisma-logic.service';
import { compareHash } from 'src/utils/bcrypt';

@Injectable()
export class LoginserviceService {

    constructor(private readonly prisma: PrismaLogicService) { }

    async login(user: RegisterUser) {
        const { username, password } = user
        const dbUser = await this.prisma.user.findUnique({
            where: {
                username
            }
        })
        if (dbUser) {
            const dbPassword = (await dbUser).password
            const hashIsMatched = await compareHash(password, dbPassword)
            if (hashIsMatched) {
                return dbUser
            }
        }
    }

}
