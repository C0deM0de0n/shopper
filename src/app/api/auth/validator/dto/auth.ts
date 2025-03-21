import { IsString, IsEmail } from 'class-validator'

export class AuthDto {
    @IsEmail()
    email: string

    @IsString()
    password: string

    constructor(email: string, password: string) {
        this.email = email
        this.password = password
    }
}