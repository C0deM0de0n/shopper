import { ILocalCart } from "../model/localCart.types"

export const fromJson = (array: string): ILocalCart[] => {
    const data = JSON.parse(array)
    return data
}