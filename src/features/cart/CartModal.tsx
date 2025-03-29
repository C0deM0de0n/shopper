'use client'
import { FC, useRef } from 'react';
import Image from 'next/image';
import { useAppDispatch } from '@/app/store';
import { setShowCart } from '@/enteties';
import { useModalRef } from '@/shared';
import { CartContent } from './components/CartContent';

interface Props { }

export const CartModal: FC<Props> = ({ }) => {
    const dispatch = useAppDispatch()
    const cartModalRef = useRef<HTMLDivElement>(null)

    useModalRef({ 
        closeRef: cartModalRef, 
        reduxFC: setShowCart,
        data: false
    })

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
            <CartContent />
        </div>
    );
};