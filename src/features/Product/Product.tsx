import { FC } from 'react';
import { products } from '@/enteties';
import { Item } from './components/Item';
import { Container, AddButton } from '@/shared';

interface Props { }

export const Product: FC<Props> = ({ }) => {
  return (
    <Container>
      <div className='flex mt-20 justify-between gap-10 flex-wrap'>
        {products.map((item, id) =>
        <div className='flex flex-col gap-5'>
          <Item
            key={id}
            icon={item.icon}
            name={item.name}
            rating={item.rating}
            views={item.views}
            price={item.price}
            save={item.save}
          />
          <AddButton className='w-full'/>
        </div>

        )}
      </div>
    </Container>

  );
};