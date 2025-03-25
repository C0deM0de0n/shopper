interface IProduct {
    icon: string
    name: string
    rating: number
    views: number
    price: number
    save?: number
}

export const products: IProduct[] = [
    {icon: '/P1.svg', name: 'Boat Rockerz 333', rating: 5, views: 75, price: 20, save: 60},
    {icon: '/P2.svg', name: 'Boat kerz 234', rating: 5, views: 75, price: 40, },
    {icon: '/P3.svg', name: 'Boat Rockerz 323', rating: 5, views: 75, price: 30, save: 40},
    {icon: '/P4.svg', name: 'Boat Rockerz 333', rating: 5, views: 75, price: 20, save: 60},
    {icon: '/P5.svg', name: 'Boat kerz 234', rating: 5, views: 75, price: 40, },
    {icon: '/P6.svg', name: 'Boat Rockerz 323', rating: 5, views: 75, price: 30, save: 40},
]