import { FC } from 'react';
import { AddButton } from '@/shared';

interface Props {
  count: number 
  onAddToCart: () => void
  onRemoveCart: () => void
}

export const PlusMinusItem: FC<Props> = ({  onAddToCart, count, onRemoveCart  }) => {
  return (
    <div className='flex gap-5 h-full items-center'>
      <AddButton className='w-full h-full' btnFC={onRemoveCart} text={'-'} />
      <span className='flex justify-center items-center w-full h-[50px] border-2 border-[#10B981] rounded-4xl'>
        <p className='font-medium text-[15px]'>
          {count}
        </p>
      </span>
      <AddButton className='w-full h-full' btnFC={onAddToCart} text={'+'} />
    </div>
  );
};