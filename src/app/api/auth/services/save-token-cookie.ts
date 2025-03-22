import { NextResponse } from "next/server";
import { TokenType, TokenExpiration } from "@/shared";


export function saveRefreshToken(res: NextResponse, refreshToken: string) {
  const expiresIn = new Date();
  expiresIn.setDate(expiresIn.getDate() + Number(TokenExpiration.refreshToken));

  res.cookies.set(TokenType.refreshToken, refreshToken, {
    httpOnly: true,
    domain: 'localhost',
    secure: true,
    sameSite: 'strict',
    expires: expiresIn
  });
}

export function removeRefreshTokenResponse(res: NextResponse) {
  res.cookies.set(TokenType.refreshToken, '', {
    httpOnly: true,
    domain: 'localhost',
    secure: true,
    sameSite: 'strict',
    expires: new Date(0)
  })
}
