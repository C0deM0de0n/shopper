import { FC } from 'react';
import Image from 'next/image';

interface Props {}

export const PlayVideo: FC<Props> = ({}) => {
  return (
    <div className='absolute bottom-10 left-0 flex flex-col items-center justify-center gap-2'>
        <div className='relative rounded-[100%] overflow-hidden'>
            <Image src={'/Rev5.svg'} width={69} height={69} alt='review'/>
        </div>
        <h1 className='text-[21px] font-medium'>Play Video</h1>
    </div>
  );
};