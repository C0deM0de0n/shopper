import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Props {}

export const Socials: FC<Props> = ({}) => {
  return (
    <div className='relative flex items-center gap-5'>
        <Link className='relative' href={'#'}>        
            <Image width={22} height={22} src={'/inst.svg'} alt='social'/>
        </Link>
        <Link className='relative' href={'#'}>        
            <Image width={22} height={22} src={'/inst.svg'} alt='social'/>
        </Link>
        <Link className='relative' href={'#'}>        
            <Image width={22} height={22} src={'/inst.svg'} alt='social'/>
        </Link>
    </div>
  );
};