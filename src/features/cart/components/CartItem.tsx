import { FC } from 'react';
import { IProduct } from '@/enteties';
import { CartItemInfo } from './CartItemInfo';
import { PlusMinusItem, useCartHelper } from '@/enteties';


interface Props {
    product: IProduct
    count: number
}

export const CartItem: FC<Props> = ({ product, count }) => {

    const { onAddToCart, onRemoveCart } = useCartHelper({ id: product.id })

    return (
        <div className='flex items-center p-5 justify-between w-full bg-white rounded-[5px] max-lg:flex-col max-lg:gap-5'>
            <CartItemInfo
                icon={product.icon}
                name={product.name}
                rating={product.rating}
                views={product.views}
                price={product.price}
            />
            <div className='w-60 h-12'>
                <PlusMinusItem
                    onAddToCart={onAddToCart}
                    onRemoveCart={onRemoveCart}
                    count={count}
                />
            </div>
        </div>
    );
};