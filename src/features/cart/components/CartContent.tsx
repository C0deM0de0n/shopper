'use client'
import { FC, useMemo } from 'react';
import { useAppSelector } from '@/app/store';
import { products } from '@/enteties';
import { CartItem } from './CartItem';
import { CartEmpty } from './CartEmpty';
import { CartSum } from './CartSum';


interface Props { }

export const CartContent: FC<Props> = ({ }) => {

    const { localCart } = useAppSelector(state => state.cartSlice)

    const productMap = useMemo(() => {
        return new Map(products.map(item => [item.id, { ...item }]))
    }, [products])

    const totalSum = useMemo(() => {
        if (localCart.length === 0) return 0
        return localCart.reduce((sum, item) => {
            const product = productMap.get(item.id)
            return sum + (product ? product.price * item.count : 0)
        }, 0)


    }, [localCart, productMap])

    return (
        <div className='flex flex-col gap-5 mt-5'>
            {localCart.length > 0 ? (
                <>
                    {localCart.map((item, id) => {
                        const product = productMap.get(item.id)!
                        return (
                            <CartItem
                                key={item.id}
                                product={product}
                                count={item.count}
                            />
                        )
                    })}
                    <CartSum sum={totalSum} />
                </>
            )
                : <CartEmpty />
            }
        </div>
    );
};