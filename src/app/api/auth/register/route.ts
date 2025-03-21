import { NextResponse, NextRequest } from 'next/server';
import { validateDto } from "../validator/validate";
import { AuthDto } from "../validator/dto/auth";
import { create } from "../services/register";
import { saveRefreshToken } from "../services/save-token-cookie";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    await validateDto(body, AuthDto);

    const { refreshToken, ...user } = await create(body);
    const res = NextResponse.json(user, {status: 200})

    saveRefreshToken(res, refreshToken);

    return res
  } catch (error) {
    return NextResponse.json({ message: 'Не удалось создать пользователя' }, { status: 400 });
  }
}
