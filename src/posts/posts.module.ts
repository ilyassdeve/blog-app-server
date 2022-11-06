import { Module } from '@nestjs/common';
import { PrismaLogicModule } from 'src/prisma-logic/prisma-logic.module';
import { PostsController } from './posts-controller/posts-controller.controller';
import { PostsService } from './posts-service/posts-service.service';

@Module({
  imports: [PrismaLogicModule],
  controllers: [PostsController],
  providers: [PostsService]
})
export class PostsModule { }
