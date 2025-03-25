import { FC } from 'react';
import Image from 'next/image';
import { reviews } from '@/enteties';

interface Props {}

export const Reviews: FC<Props> = ({}) => {
  return (
    <div className='flex items-center gap-5'>
        <div className='relative flex items-center w-[200px] h-[60px]'>
            {reviews.map((item, id) => 
                <Image 
                    key={id} 
                    className='absolute'
                    style={{ left: `${id * 40}px`, }}
                    src={item.icon}
                    width={60} height={60} alt='review'
                />
            )}
        </div>
        <h1 className='text-[26px] font-medium'>15k Well <br /> Reviews</h1>
    </div>
  );
};