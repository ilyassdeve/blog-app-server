import { Module } from '@nestjs/common';
import { LoginserviceService } from './loginservice/loginservice.service';
import { LogincontrollerController } from './logincontroller/logincontroller.controller';
import { PrismaLogicModule } from 'src/prisma-logic/prisma-logic.module';

@Module({
  imports: [PrismaLogicModule],
  controllers: [LogincontrollerController],
  providers: [LoginserviceService]
})
export class LoginModule { }
