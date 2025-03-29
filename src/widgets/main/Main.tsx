import { FC } from 'react';
import { Overview } from './components/Overview';
import { BuyButton } from './components/BuyButton';
import { Reviews } from './components/Reviews';
import { Product } from './components/Product';
import { Container } from '@/shared';


interface Props { }

export const Main: FC<Props> = ({ }) => {
  return (
    <Container>
      <div className='flex justify-between w-full mt-20 max-lg:justify-center'>
        <div className='flex flex-col gap-12 max-lg:justify-center max-lg:items-center'>
          <Overview />
          <BuyButton />
          <Reviews />
        </div>
        <Product />
      </div>
    </Container>

  );
};