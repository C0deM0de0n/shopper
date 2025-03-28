'use client'
import { FC, useMemo, useRef } from 'react';
import Image from 'next/image';
import { useAppSelector, useAppDispatch } from '@/app/store';
import { products } from '@/enteties';
import { setShowCart } from '@/enteties';
import { CartItem } from './components/CartItem';
import { useModalRef } from '@/shared';
import { CartEmpty } from './components/CartEmpty';
import { CartSum } from './components/CartSum';

interface Props { }

export const CartModal: FC<Props> = ({ }) => {
    const dispatch = useAppDispatch()
    const cartModalRef = useRef<HTMLDivElement>(null)
    const { localCart } = useAppSelector(state => state.cartSlice)

    useModalRef({ 
        closeRef: cartModalRef, 
        reduxFC: setShowCart,
        data: false
    })

    const productMap = useMemo(() => {
        return new Map(products.map(item => [item.id, { ...item }]))
    }, [products])

    const totalSum = useMemo(() => {
        if(localCart.length === 0) return 0
        return localCart.reduce((sum, item) => {
            const product = productMap.get(item.id)
            return sum + (product ? product.price * item.count : 0)
        }, 0)
        

    }, [localCart, products])

    return (
        <div ref={cartModalRef} className='absolute top-25 right-0 w-2xl p-5 min-h-60 bg-[#4484FF] rounded-[10px]'>
            <div className='flex w-full justify-between items-center'>
                <h1 className='text-white text-2xl font-medium'>Cart products</h1>
                <Image 
                    className='bg-white cursor-pointer rounded-[5px]'
                    onClick={() => dispatch(setShowCart(false))}
                    width={30} height={30}
                    src={'/Closer.svg'} alt='closer'
                />
            </div>
            <div className='flex flex-col gap-5 mt-5'>
                {localCart.length > 0 ? ( 
                    <>
                        {localCart.map((item, id) => {
                            const product = productMap.get(item.id)!
                            return (
                                <CartItem
                                    key={id}
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
        </div>
    );
};