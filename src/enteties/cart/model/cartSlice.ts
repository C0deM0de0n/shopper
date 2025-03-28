import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ILocalCart } from "./localCart.types";

interface ICart {
    showCart: boolean
    localCart: ILocalCart[]
}

const initialState: ICart = {
    showCart: false,
    localCart: []
}  

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setlocalCart(state, action: PayloadAction<ILocalCart[]>) {
            state.localCart = action.payload
        },
        setShowCart(state, action: PayloadAction<boolean>) {
            state.showCart = action.payload
        }
    }
})

export const { setlocalCart, setShowCart } = cartSlice.actions
export default cartSlice.reducer