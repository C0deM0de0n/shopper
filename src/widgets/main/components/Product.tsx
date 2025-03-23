import { FC } from 'react';
import { Seller } from './Seller';
import { Star } from './Star';
import { PlayVideo } from './PlayVideo';
import { SellerName } from './SellerName';

interface Props { }

export const Product: FC<Props> = ({ }) => {
  return (
    <div className='relative flex items-center justify-center w-[600px] h-[550px]'>
      <Star top={true} />
      <div className='relative flex flex-col items-center justify-center'>
        <SellerName />
        <Seller />
      </div>
      <PlayVideo />
      <Star top={false} />
    </div>
  );
};