import { NextResponse, NextRequest } from 'next/server';
import { checkAuth } from '../../shared';
import { removeRefreshTokenResponse } from "../services/save-token-cookie";

export async function POST(req: NextRequest) {
    try {
        await checkAuth(req)
        const res = NextResponse.json({ message: 'success log out' }, { status: 200 })
        removeRefreshTokenResponse(res)
        return res
    } catch(error) {
        const errorMessage = error instanceof Error ? error.message : error
        return NextResponse.json({ message: errorMessage }, { status: 500 })
    }
}