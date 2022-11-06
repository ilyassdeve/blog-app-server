import { Injectable } from '@nestjs/common';
import { CommentsDto } from 'src/dtos/Comments.dto';
import { PrismaLogicService } from 'src/prisma-logic/prisma-logic.service';

@Injectable()
export class CommentserviceService {

    constructor(private readonly prisma: PrismaLogicService) { }


    async getPostComments(id: number) {
        const comments = await this.prisma.comment.findMany({
            where: {
                id

            },
            include: {
                author: true
            }
        })
        return comments
    }


    async createComment(data: CommentsDto) {
        const { body, authorId, postTitle, postId } = data
        const newComment = await this.prisma.comment.create({
            data
        })

        return newComment
    }
}
