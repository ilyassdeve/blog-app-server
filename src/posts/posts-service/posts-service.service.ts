import { Injectable } from '@nestjs/common';
import { PostInterface } from 'src/dtos/Posts.dto';
import { PrismaLogicService } from 'src/prisma-logic/prisma-logic.service';

@Injectable()
export class PostsService {

    constructor(private readonly PrismaLogicService: PrismaLogicService) { }

    async getAllPosts() {
        const posts = await this.PrismaLogicService.post.findMany()
        return posts
    }

    async getPostById(id: number) {
        const post = await this.PrismaLogicService.post.findUnique({
            where: {
                id
            },
            include: {
                comments: {
                    include: {
                        author: true
                    }
                }
            }
        })
        return post
    }

    async createPost(post: PostInterface) {
        const { body, coverImage, title } = post
        const newPost = await this.PrismaLogicService.post.create({
            data: {
                body,
                coverImage,
                title
            }
        })
        return newPost
    }

}
