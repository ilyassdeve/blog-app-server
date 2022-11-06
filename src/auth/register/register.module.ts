import { Module } from '@nestjs/common';
import { PrismaLogicModule } from 'src/prisma-logic/prisma-logic.module';
import { RegistercontrollerController } from './registercontroller/registercontroller.controller';
import { RegisterserviceService } from './registerservice/registerservice.service';

@Module({
  imports: [PrismaLogicModule],
  controllers: [RegistercontrollerController],
  providers: [RegisterserviceService]
})
export class RegisterModule { }
