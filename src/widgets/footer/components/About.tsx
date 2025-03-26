import { FC } from 'react';
import Link from 'next/link';

interface Props {}

export const About: FC<Props> = ({}) => {
  return (
    <div className='flex flex-col gap-5'>
        <h1 className='tetx-[17px] font-[400] text-[#10B981]'>About</h1>
        <Link href={'#'}>Our Story</Link>
        <Link href={'#'}>Benefits</Link>
        <Link href={'#'}>Team</Link>
        <Link href={'#'}>Careers</Link>
    </div>
  );
};