import { FC } from 'react';
import Image from 'next/image';

interface Props {}

export const Logo: FC<Props> = ({}) => {
  return (
    <div className='relative w-44 h-12 max-sm:w-32'>
      <Image src={'/Shopper.svg'} alt='Shopper' fill={true}/>
    </div>
  );
};