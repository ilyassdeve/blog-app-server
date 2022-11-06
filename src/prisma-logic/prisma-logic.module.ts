import { Module } from '@nestjs/common';
import { PrismaLogicService } from './prisma-logic.service';

@Module({
  providers: [PrismaLogicService],
  exports: [PrismaLogicService]
})
export class PrismaLogicModule { }
