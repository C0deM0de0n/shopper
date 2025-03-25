import { FC } from 'react';
import { links } from '@/enteties';
import { Container } from '@/shared';

interface Props { }

export const Navigation: FC<Props> = ({ }) => {
  return (
    <div className='w-full h-24 bg-[#10B981]'>
      <Container>
        <div className='flex w-7xl h-24 justify-center items-center gap-10'>
          {links.map((link, id) =>
            <a className='text-[20px] font-[600] text-white' key={id} href={link.href}>{link.name}</a>
          )}
        </div>
      </Container>
    </div>
  );
};