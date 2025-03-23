import { FC } from 'react';
import { links } from '@/enteties';

interface Props {}

export const Navigation: FC<Props> = ({}) => {
  return (
    <div className='absolute left-0 flex justify-center items-center gap-10 w-full h-24 bg-[#10B981]'>
      {links.map((link, id) => 
        <a className='text-[20px] font-[600] text-white' key={id} href={link.href}>{link.name}</a>
      )}
    </div>
  );
};