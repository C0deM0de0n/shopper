export interface IProduct {
    id: string
    icon: string
    name: string
    rating: number
    views: number
    price: number
    save?: number
}

export const products: IProduct[] = [
    {id: '#1', icon: '/P1.svg', name: 'Boat Rockerz 333', rating: 5, views: 75, price: 20, save: 60},
    {id: '#2', icon: '/P2.svg', name: 'Boat kerz 234', rating: 5, views: 75, price: 40, },
    {id: '#3', icon: '/P3.svg', name: 'Boat Rockerz 323', rating: 5, views: 75, price: 30, save: 40},
    {id: '#4', icon: '/P4.svg', name: 'Boat Rockerz 333', rating: 5, views: 75, price: 20, save: 60},
    {id: '#5', icon: '/P5.svg', name: 'Boat kerz 234', rating: 5, views: 75, price: 40, },
    {id: '#6', icon: '/P6.svg', name: 'Boat Rockerz 323', rating: 5, views: 75, price: 30, save: 40},
]