import { FC } from 'react';
import Link from 'next/link';

interface Props {}

export const Help: FC<Props> = ({}) => {
  return (
    <div className='flex flex-col gap-5'>
        <h1 className='tetx-[17px] font-[400] text-[#10B981]'>Help</h1>
        <Link href={'#'}>FAQs</Link>
        <Link href={'#'}>Contacts Us</Link>
    </div>
  );
};