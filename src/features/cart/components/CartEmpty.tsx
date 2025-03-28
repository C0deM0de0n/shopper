import { FC } from 'react';
import Image from 'next/image';

interface Props {}

export const CartEmpty: FC<Props> = ({}) => {
  return (
    <div className='flex flex-col justify-center items-center gap-5 w-full h-full'>
        <Image src='/emptycart.svg' width={100} height={100} alt='empty cart'/>
        <h1 className='text-white text-[20px] font-medium'>your cart is empty</h1>
    </div>
  );
};