import { FC } from 'react';
import { Services } from './Services';
import { About } from './About';
import { Help } from './Help';

interface Props {}

export const Navigation: FC<Props> = ({}) => {
  return (
    <div className='flex gap-50'>
        <Services />
        <About />
        <Help />
    </div>
  );
};