import { IsNotEmpty } from "class-validator"



export class CommentsDto {
    @IsNotEmpty()
    body: string

    @IsNotEmpty()
    authorId: number

    @IsNotEmpty()
    postTitle: string

    @IsNotEmpty()
    postId: number
}