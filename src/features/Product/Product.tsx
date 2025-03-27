'use client'
import { FC, useState, useMemo } from 'react';
import { products } from '@/enteties';
import { Item } from './components/Item';
import { Container } from '@/shared';
import { AddToCart } from './components/addToCart';
import { useLocalCart } from './hooks/useLocalCart';
import { ILocalCart } from '@/shared';

interface Props { }

export const Product: FC<Props> = ({ }) => {

  const [inCart, setInCart] = useState<ILocalCart[] | []>([])
  useLocalCart({ setInCart })

  const cartMap = useMemo(() => {
    return new Map(inCart.map(item => [item.id, item.count]));
  }, [inCart]);

  return (
    <Container>
      <div className='flex mt-20 justify-between gap-10 flex-wrap'>
        {products.map((product, id) =>
          <div key={id} className='flex flex-col gap-5'>
            <Item
              icon={product.icon}
              name={product.name}
              rating={product.rating}
              views={product.views}
              price={product.price}
              save={product.save}
            />
            <AddToCart 
              id={product.id} 
              inCart={cartMap.get(product.id) || 0}
              setInCart={setInCart}
            />
          </div>

        )}
      </div>
    </Container>

  );
};