import { Module } from '@nestjs/common';
import { PrismaLogicModule } from 'src/prisma-logic/prisma-logic.module';
import { CommentcontrollerController } from './commentcontroller/commentcontroller.controller';
import { CommentserviceService } from './commentservice/commentservice.service';

@Module({
  imports: [PrismaLogicModule],
  controllers: [CommentcontrollerController],
  providers: [CommentserviceService]
})
export class CommentsModule { }
