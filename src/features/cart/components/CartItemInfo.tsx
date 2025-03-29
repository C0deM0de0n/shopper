import { FC } from 'react';
import Image from 'next/image';

interface Props {
    icon: string
    name: string
    rating: number
    views: number
    price: number
}

export const CartItemInfo: FC<Props> = ({ icon, name, rating, views, price }) => {
    return (
        <div className='flex gap-5'>
            <Image src={icon} width={50} height={50} alt='product' />
            <div>
                <h1>{name}</h1>
                <div className='flex  gap-5 max-sm:flex-col max-sm:gap-2'>
                    <div className='flex gap-2'>
                        {new Array(rating).fill(null).map((_, id) =>
                            <Image key={id} src={'/Star3.svg'} width={17} height={17} alt='star' />
                        )}
                    </div>
                    <p className='text-[#888888] text-[11px] font-medium'>{views} Reviews</p>
                </div>
                <p>${price}</p>
            </div>
        </div>
    );
};