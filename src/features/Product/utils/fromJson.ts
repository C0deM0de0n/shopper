import { ILocalCart } from "@/shared"

export const fromJson = (array: string): ILocalCart[] => {
    const data = JSON.parse(array)
    return data
}