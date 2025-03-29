import { FC } from 'react';
import { Services } from './Services';
import { About } from './About';
import { Help } from './Help';

interface Props {}

export const Navigation: FC<Props> = ({}) => {
  return (
    <div className='flex gap-50 max-xl:gap-30 max-lg:gap-10'>
        <Services />
        <About />
        <Help />
    </div>
  );
};