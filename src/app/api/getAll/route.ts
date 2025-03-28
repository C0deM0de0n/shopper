import { prisma } from "@/shared/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const users = await prisma.user.findMany()
    return NextResponse.json(users, { status: 200 })
}