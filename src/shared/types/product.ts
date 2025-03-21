import { IBase } from "./root";

export interface IProduct extends IBase {
    name: string
    title: string
    icon: string
    reviews: number
    topPicks: number
    watches: number
    wireless: boolean
    wired: boolean
    price: number
}
