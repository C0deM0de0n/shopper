import { FC } from 'react';
import { ILocalCart, AddButton } from '@/shared';
import { addToCart } from '../utils/addToCart';
import { removeCart } from '../utils/removeCart';

interface Props {
    id: string
    inCart: number
    setInCart: (localCart: ILocalCart[] | []) => void
}

export const AddToCart: FC<Props> = ({ id, inCart, setInCart }) => {

    const onAddToCart = () => {
        const localCart = addToCart(id)
        setInCart(localCart)
    }
    
    const onRemoveCart = () => {
        const localcart = removeCart(id)
        setInCart(localcart)
    }

    return (
        <div>
            {inCart === 0
                ? <AddButton className='w-full h-[70px]' btnFC={onAddToCart} text={'add to cart'}/>
                : <div className='flex gap-5 items-center'>
                   <AddButton className='w-full h-[70px]' btnFC={onRemoveCart} text={'-'}/>
                    <span className='flex justify-center items-center w-full h-[50px] border-2 border-[#10B981] rounded-4xl'>
                        <p className='font-medium text-[15px]'>
                            {inCart}
                        </p>
                    </span>
                    <AddButton className='w-full h-[70px]' btnFC={onAddToCart} text={'+'}/>
                </div>
            }
        </div>
    );
};