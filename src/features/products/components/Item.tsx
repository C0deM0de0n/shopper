import { FC } from 'react';
import Image from 'next/image';
import { IProduct } from '@/enteties';

interface Props {
  product: IProduct
}

export const Item: FC<Props> = ({ product }) => {
  return (
    <div>
        <div className='flex flex-col justify-center items-center  relative w-[361px] h-[438px] bg-[#E0EFFF] rounded-[5px] max-xl:w-[280px] max-xl:h-[400px]'>
            <Image src={product.icon} width={168} height={168} alt='product'/>
            <div className='flex mt-10 flex-col p-5  justify-center gap-2 w-[319px] h-[164px] bg-white rounded-[5px] max-xl:w-[260px]'>
              <h1 className='tetx-[35px] font-medium'>{product.name}</h1>
              <div className='flex gap-5'>
                <div className='flex gap-2'>
                  {new Array(product.rating).fill(null).map((_, id) => 
                    <Image key={id} src={'/Star3.svg'} width={17} height={17} alt='star'/>
                  )}
                </div>
                <p className='text-[#888888] text-[11px] font-medium'>{product.views} Reviews</p>
              </div>
              <p className='text-black text-2xl font-medium'>${product.price}</p>
            </div>
            {product.save && 
              <span className='absolute top-2 right-2 text-white font-medium flex w-[100px] h-[100px] flex-col items-center justify-center bg-[#10B981] rounded-[100%] max-xl:w-[60px] max-xl:h-[60px] max-xl:text-[13px]'>
                <h1>Save</h1> 
                {product.save}%
              </span>
            }
        </div>
    </div>
  );
};