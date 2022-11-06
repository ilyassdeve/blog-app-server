import { Controller, Get, Post, Param, HttpException, HttpStatus, Body, UsePipes, ValidationPipe, ParseIntPipe } from '@nestjs/common';
import { PostInterface } from 'src/dtos/Posts.dto';
import { PostsService } from '../posts-service/posts-service.service';

@Controller('posts')
export class PostsController {

    constructor(private readonly PostService: PostsService) { }

    @Get()
    async getAllPosts() {
        const posts = await this.PostService.getAllPosts()
        if (posts.length > 0) {
            return posts
        } else {
            throw new HttpException('No POsts', HttpStatus.NOT_FOUND)
        }
    }

    @Get('/:id')
    async getPostById(@Param('id', ParseIntPipe) id: number) {
        const post = await this.PostService.getPostById(id)
        if (post) {
            return post
        } else {
            throw new HttpException('No Post For This Slug', HttpStatus.NOT_FOUND)
        }
    }

    @UsePipes(ValidationPipe)
    @Post('create')
    async createNewPost(@Body() postData: PostInterface) {
        const newPost = await this.PostService.createPost(postData)
        if (newPost) {
            return newPost
        } else {
            throw new HttpException('Post Creation went Wrong TRy Again', HttpStatus.I_AM_A_TEAPOT)
        }
    }

}
