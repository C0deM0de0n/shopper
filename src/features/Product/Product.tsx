'use client'
import { FC, useMemo } from 'react';
import { useAppSelector } from '@/app/store';
import { 
  products, 
  setlocalCart 
} from '@/enteties';
import { Container } from '@/shared';
import { Item } from './components/Item';
import { AddToCart } from './components/addToCart';
import { useLocalCart } from './hooks/useLocalCart';

interface Props { }

export const Product: FC<Props> = ({ }) => {
  const { localCart } = useAppSelector(state => state.cartSlice)

  useLocalCart({ setLocalCart: setlocalCart })

  const cartMap = useMemo(() => {
    return new Map(localCart.map(item => [item.id, item.count]));
  }, [localCart]);

  return (
    <Container>
      <div className='flex mt-20 justify-between gap-10 flex-wrap  max-xl:gap-5 max-md:justify-center'>
        {products.map((product, id) =>
          <div key={id} className='flex flex-col gap-5'>
            <Item product={product}/>
            <AddToCart 
              id={product.id} 
              inCart={cartMap.get(product.id) || 0}
            />
          </div>

        )}
      </div>
    </Container>

  );
};