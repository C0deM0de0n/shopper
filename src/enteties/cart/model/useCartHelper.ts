import { useCallback } from "react"
import { useAppDispatch } from "@/app/store"
import { setlocalCart } from "./cartSlice"
import { ILocalCart } from "./localCart.types"
import { addToCart } from "../utils/addToCart"
import { removeCart } from "../utils/removeCart"

interface Props {
    id: string
}

export const useCartHelper = ({ id }: Props) => {

    const dispatch = useAppDispatch()

    const onAddToCart = useCallback(() => {
        const localCart: ILocalCart[] = addToCart(id);
        dispatch(setlocalCart(localCart));
    }, [dispatch, id]);  

    const onRemoveCart = useCallback(() => {
        const localCart: ILocalCart[] = removeCart(id);
        dispatch(setlocalCart(localCart));
    }, [dispatch, id]);  

    return { onAddToCart, onRemoveCart }
}


