import { IsNotEmpty } from "class-validator"

export class PostInterface {
    @IsNotEmpty()
    title: string

    @IsNotEmpty()
    coverImage: string

    @IsNotEmpty()
    body: string
}