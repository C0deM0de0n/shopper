import { prisma } from "@/shared/lib/prisma";

export async function getUserByEmail(email: string) {
    return prisma.user.findUnique({
        where: { email }
    })
}