import { FC } from 'react';
import Link from 'next/link';

interface Props {}

export const Services: FC<Props> = ({}) => {
  return (
    <div className='flex flex-col gap-5'>
        <h1 className='tetx-[17px] font-[400] text-[#10B981]'>Services</h1>
        <Link href={'#'}>Email Marketing</Link>
        <Link href={'#'}>Campaigns</Link>
        <Link href={'#'}>Branding</Link>
        <Link href={'#'}>Offline</Link>
    </div>
  );
};