//Navigation
export { links } from "./navigation/links";
//Main
export { reviews } from "./main/reviews";
//Featured
export { featured } from "./featured/featured";
//Products
export { products } from "./product/product";
export type { IProduct } from "./product/product";
//Cart
export { default as cartSlice, setlocalCart, setShowCart } from "./cart/model/cartSlice";
export { useCartHelper } from "./cart/model/useCartHelper";
export { PlusMinusItem } from "./cart/ui/PlusMinusItem";
export type { ILocalCart } from './cart/model/localCart.types'