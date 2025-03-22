import { NextResponse, NextRequest } from "next/server";
import { getUserById } from "../../shared";
import { checkAuth } from "../../shared";

export async function GET(req: NextRequest) {
    try {
        const userId = await checkAuth(req)
        const isExistUser = await getUserById(userId)

        if(!isExistUser) return NextResponse.json({ message: 'User not found' }, { status: 404 })

        const { password, ...user } = isExistUser

        return NextResponse.json(user, {status: 200})
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : error
        return NextResponse.json({ message: errorMessage }, { status: 400 })
    }
}

