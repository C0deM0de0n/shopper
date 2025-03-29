import { FC } from 'react';

interface Props {}

export const Overview: FC<Props> = ({}) => {
  return (
    <div className='flex flex-col gap-5 max-lg:justify-center max-lg:items-center'>
        <h1 className='text-[64px] font-[600] leading-20 max-lg:text-center max-sm:text-3xl max-sm:leading-10'>Discover Our <br /> Latest  Products</h1>
        <p className='text-[21px] font-medium max-lg:text-center '>
            Lorem ipsum is a placeholder text commonly used <br />
            to demonstrate the visual form of a product
        </p>
    </div>
  );
};