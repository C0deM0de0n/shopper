import { FC } from 'react';
import Image from 'next/image';

interface Props {
  icon: string
  name: string
  rating: number
  views: number
  price: number
  save?: number
}

export const Item: FC<Props> = ({ icon, name, rating, views, price, save }) => {
  return (
    <div>
        <div className='flex flex-col justify-center items-center  relative w-[361px] h-[438px] bg-[#E0EFFF] rounded-[5px]'>
            <Image src={icon} width={168} height={168} alt='product'/>
            <div className='flex mt-10 flex-col p-5  justify-center gap-2 w-[319px] h-[164px] bg-white rounded-[5px]'>
              <h1 className='tetx-[35px] font-medium'>{name}</h1>
              <div className='flex  gap-5'>
                <div className='flex gap-2'>
                  {new Array(rating).fill(null).map((_, id) => 
                    <Image key={id} src={'/Star3.svg'} width={17} height={17} alt='star'/>
                  )}
                </div>
                <p className='text-[#888888] text-[11px] font-medium'>{views} Reviews</p>
              </div>
              <p className='text-black text-2xl font-medium'>${price}</p>
            </div>
            {save && 
              <span className='absolute top-2 right-2 text-white font-medium flex w-[100px] h-[100px] flex-col items-center justify-center bg-[#10B981] rounded-[100%]'>
                <h1>Save</h1> 
                {save}%
              </span>
            }
        </div>
    </div>
  );
};