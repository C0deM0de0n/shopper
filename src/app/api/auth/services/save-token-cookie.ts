import { NextResponse } from "next/server";
import { TokenType, TokenExpiration } from "@/shared";


export function saveRefreshToken(res: NextResponse, refreshToken: string) {
  const expiresIn = new Date();
  expiresIn.setDate(expiresIn.getDate() + Number(TokenExpiration.refreshToken));

  res.cookies.set(TokenType.refreshToken, refreshToken, {
    httpOnly: true,
    secure: true,
    sameSite: 'strict',
    expires: expiresIn
  });
}
