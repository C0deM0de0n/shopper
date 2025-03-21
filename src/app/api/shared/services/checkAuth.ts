import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function checkAuth(req: NextRequest) {
    const token = req.headers.get('authorization')?.split(' ')[1]
    if(!token) throw {message: 'token not passed'}
    try {
        const secret = process.env.JWT_SECRET || ''
        const decoded = jwt.verify(token, secret)
        
        const userId = (decoded as { id: string }).id

        return userId
    } catch (error) {
        throw {message: 'Invalid or expired token'}
    }
}