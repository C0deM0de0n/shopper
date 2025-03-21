import { prisma } from "@/shared/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(req: NextRequest) {
    const users = await prisma.user.deleteMany()
    return NextResponse.json(users, { status: 200 })
}