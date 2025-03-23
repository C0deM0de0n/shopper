import { FC } from 'react';
import { Overview } from './components/Overview';
import { BuyButton } from './components/BuyButton';
import { Reviews } from './components/Reviews';
import { Product } from './components/Product';

interface Props {}

export const Main: FC<Props> = ({}) => {
  return (
    <div className='flex items-center justify-between w-full h-screen'>
      <div className='flex flex-col gap-12'>
        <Overview />
        <BuyButton />
        <Reviews />
      </div>
      <Product/>
    </div>
  );
};