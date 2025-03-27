import { ILocalCart } from "@/shared"

export const toJson = (array: ILocalCart[]): string => {
    const data = JSON.stringify(array)
    return data
}