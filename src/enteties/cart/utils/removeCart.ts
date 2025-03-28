import { ILocalCart } from "@/enteties"
import { minusCart } from "./minusCart"
import { fromJson } from "./fromJson"
import { toJson } from "./toJson"

export const removeCart = (id: string) => {
    const localCart: string | null = localStorage.getItem('cart') ?? null
    const array: ILocalCart[] | [] = localCart ? fromJson(localCart) : []
    const newArray = minusCart(id, array)

    newArray.length > 0 
        ?  localStorage.setItem("cart", toJson(newArray))
        : localStorage.removeItem('cart')
    return newArray
}