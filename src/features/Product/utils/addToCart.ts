import { ILocalCart } from "@/shared"
import { fromJson } from "./fromJson"
import { toJson } from "./toJson"
import { plucCart } from "./plusCart"



export const addToCart = (id: string) => {
    const localCart: string | null = localStorage.getItem('cart') ?? null
    const array: ILocalCart[] | [] = localCart ? fromJson(localCart) : []

    const isExist = array.some(item => item.id === id)

    const newArray = isExist 
        ? plucCart(id, array)
        : [...array, {id: id, count: 1}]

    localStorage.setItem('cart', toJson(newArray));
    return newArray
}