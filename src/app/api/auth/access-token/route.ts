import { NextRequest, NextResponse } from "next/server";
import { saveRefreshToken, removeRefreshTokenResponse } from "../services/save-token-cookie";
import { getNewTokens } from "../services/generateTokens";
import { TokenType } from "@/shared";

export async function POST(req: NextRequest) {
    try {
        const refreshTokenFromCookies = req.cookies.get(TokenType.refreshToken)
        if(!refreshTokenFromCookies) {
            const res = NextResponse.json({ message: 'Refresh token not passed'}, { status: 400 })
            removeRefreshTokenResponse(res)
            return res
        }

        const { refreshToken, ...user } = await getNewTokens(refreshTokenFromCookies.value)
        const res = NextResponse.json(user, { status: 200 })
        saveRefreshToken(res, refreshToken)

        return res

    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : error
        return NextResponse.json({ message: errorMessage }, { status: 500 })
    }
}