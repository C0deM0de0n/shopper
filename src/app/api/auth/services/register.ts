import { prisma } from "@/shared/lib/prisma";
import { hash } from 'argon2' 
import { generateTokens } from "./generateTokens";
import { AuthDto } from "../validator/dto/auth";

export async function create(data: AuthDto) {
    const hashPass = await hash(data.password)
    const created = await prisma.user.create({
        data: {
            ...data,
            password: hashPass
        }
    })
    const { password, ...user} = created
    const tokens = generateTokens(user.id)

    return {
        user,
        ...tokens
    }
}
