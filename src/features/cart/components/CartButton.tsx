'use client'
import { FC } from 'react';
import Image from 'next/image';
import { useAppDispatch, useAppSelector } from '@/app/store';
import { setShowCart } from '@/enteties';
import { Button } from '@mui/material';

interface Props { }

export const CartButton: FC<Props> = ({ }) => {
    const dispatch = useAppDispatch()
    const { localCart, showCart } = useAppSelector(state => state.cartSlice)

    return (
        <Button
            onClick={() => dispatch(setShowCart(!showCart))}
            className='flex justify-center items-center gap-5 w-[230px] h-14'
            sx={{
                backgroundColor: '#10B981',
                '&:hover': { backgroundColor: '#20B2AA' }
              }}
            variant={'contained'}>
                <Image width={24} height={24} src={'/cart.svg'} alt='cart'/>
                <p className='text-white text-[16px] font-medium'>
                    {localCart.reduce((sum, item) => sum + item.count, 0)} Items Added
                </p>
        </Button>
    );
};