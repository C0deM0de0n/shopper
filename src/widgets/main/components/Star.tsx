import { FC } from 'react';
import Image from 'next/image';

interface Props {
  top: boolean
}

export const Star: FC<Props> = ({ top }) => {
  return (
    <Image 
      className={`absolute ${top ? 'top-0 left-0' : 'bottom-10 right-0'}`}
      src={'Star.svg'} 
      width={53} height={53} 
      alt='star'
    />
  );
};