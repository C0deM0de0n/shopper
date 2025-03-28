import { FC } from 'react';
import { useCartHelper } from '@/enteties';
import { AddButton } from '@/shared';
import { PlusMinusItem } from '@/enteties';

interface Props {
    id: string
    inCart: number
}

export const AddToCart: FC<Props> = ({ id, inCart }) => {

    const { onAddToCart, onRemoveCart } = useCartHelper({ id })

    return (
        <div>
            {inCart === 0
                ? <AddButton className='w-full h-[70px]' btnFC={onAddToCart} text={'add to cart'} />
                : <PlusMinusItem onAddToCart={onAddToCart} onRemoveCart={onRemoveCart} count={inCart} />
            }
        </div>
    );
};