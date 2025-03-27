import { useEffect } from "react"
import { ILocalCart } from "@/shared"
import { fromJson } from "../utils/fromJson"

interface IProps {
    setInCart: (array: ILocalCart[] | []) => void
}

export const useLocalCart = ({ setInCart }: IProps) => {
    useEffect(() => {
        const localCart: string | null = localStorage.getItem('cart')
        const array = localCart ? fromJson(localCart) : []
        setInCart(array)
    }, [])
}