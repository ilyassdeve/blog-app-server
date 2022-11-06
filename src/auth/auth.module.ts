import { Module } from '@nestjs/common';
import { RegisterModule } from './register/register.module';
import { LoginModule } from './login/login.module';
import { PrismaLogicModule } from 'src/prisma-logic/prisma-logic.module';

@Module({
  imports: [RegisterModule, LoginModule, PrismaLogicModule]
})
export class AuthModule { }
