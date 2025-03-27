import { ILocalCart } from "@/shared";

export const plucCart = (id: string, array: ILocalCart[]): ILocalCart[] => {
    return array.map(item => 
        item.id === id ? {...item, count: item.count + 1} : item
    )
}