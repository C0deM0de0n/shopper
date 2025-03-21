import { NextRequest, NextResponse } from "next/server";
import { validateDto } from "../validator/validate";
import { AuthDto } from "../validator/dto/auth";
import { login } from "../services/login";

export async function POST(req: NextRequest) {
    try {
        const body: AuthDto = await req.json()
        await validateDto(body, AuthDto)
        return login(body)
    } catch (error) {
        return NextResponse.json({ message: error }, { status: 500 })
    }
}