import { useEffect } from "react";
import { useAppDispatch } from "@/app/store";
import { ILocalCart } from "@/enteties";
import { fromJson } from "../../../enteties/cart/utils/fromJson";

interface ReduxActionFunction<ILocalCart> {
  (data: ILocalCart[]): { type: string; payload: ILocalCart[] };
}

interface Props<ILocalCart> {
  setLocalCart: ReduxActionFunction<ILocalCart>;
}

export const useLocalCart = ({ setLocalCart }: Props<ILocalCart>) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const localCart: string | null = localStorage.getItem("cart");
    const array: ILocalCart[] = localCart ? fromJson(localCart) : [];
    dispatch(setLocalCart(array));
  }, []);
};
