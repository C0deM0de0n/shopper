import { FC } from 'react';
import Link from 'next/link';

interface Props { }

export const Privacy: FC<Props> = ({ }) => {
    return (
        <div className='flex gap-5'>
            <Link href={'#'}>Terms & Conditions</Link>
            <Link href={'#'}>Privacy Policy</Link>
        </div>
    );
};