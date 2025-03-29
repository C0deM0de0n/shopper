import { FC } from 'react';
import { links } from '@/enteties';
import { Container } from '@/shared';

interface Props { }

export const Navigation: FC<Props> = ({ }) => {
  return (
    <div className='w-full h-24 bg-[#10B981]'>
      <Container>
        <div className='flex w-wull h-24 justify-center items-center gap-10 max-sm:gap-5'>
          {links.map((link, id) =>
            <a className='text-[20px] font-[600] text-white max-sm:text-[17px]' key={id} href={link.href}>{link.name}</a>
          )}
        </div>
      </Container>
    </div>
  );
};