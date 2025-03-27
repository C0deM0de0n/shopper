import { ILocalCart } from "@/shared";

export const minusCart = (id: string, array: ILocalCart[]): ILocalCart[] => {
    return array.map(item =>
        item.id === id ? {...item, count: item.count - 1} : item
    ).filter(item => item.count > 0)
}