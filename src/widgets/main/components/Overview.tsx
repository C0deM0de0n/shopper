import { FC } from 'react';

interface Props {}

export const Overview: FC<Props> = ({}) => {
  return (
    <div className='flex flex-col gap-5'>
        <h1 className='text-[64px] font-[600] leading-20'>Discover Our <br /> Latest  Products</h1>
        <p className='text-[21px] font-medium'>
            Lorem ipsum is a placeholder text commonly used <br />
            to demonstrate the visual form of a product
        </p>
    </div>
  );
};