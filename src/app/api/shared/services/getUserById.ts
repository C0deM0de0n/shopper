import { prisma } from "@/shared/lib/prisma";


export async function getUserById(id: string) {
    return prisma.user.findUnique({
        where: { id }
    })
}