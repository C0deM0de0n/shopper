import { NextResponse } from "next/server";
import { getUserByEmail } from "../../shared";
import { validationPass } from "./validationPass";
import { AuthDto } from "../validator/dto/auth";
import { generateTokens } from "./generateTokens";
import { saveRefreshToken } from "./save-token-cookie";

export async function login(data: AuthDto) {
    const isExistUser = await getUserByEmail(data.email)
    if(!isExistUser) {
        return NextResponse.json({ message: 'User not found' }, { status: 404 })
    }

    const isValidaPass = await validationPass(data.password, isExistUser.password)
    if(!isValidaPass) {
        return NextResponse.json({ message: 'Invalid email or password' }, { status: 400 })
    } 

    const { password, ...user } = isExistUser
    const { accessToken, refreshToken } = generateTokens(user.id)

    const res = NextResponse.json({...user, accessToken}, {status: 200})

    saveRefreshToken(res, refreshToken)

    return res
}