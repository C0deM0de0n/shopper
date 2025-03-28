import { ILocalCart } from "../model/localCart.types"

export const toJson = (array: ILocalCart[]): string => {
    const data = JSON.stringify(array)
    return data
}