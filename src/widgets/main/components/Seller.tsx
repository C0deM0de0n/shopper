import { FC } from 'react';
import Image from 'next/image';

interface Props {}

export const Seller: FC<Props> = ({}) => {
  return (
    <div className='relative flex flex-col items-center justify-center gap-5 w-[272px] h-[477px] rounded-full bg-[#ECFEF4]'>
        <Image src={'/Headphone.svg'} alt='headphone' width={280} height={300}/>
        <p className='text-3xl font-[600]'>$50</p>
    </div>
  );
};