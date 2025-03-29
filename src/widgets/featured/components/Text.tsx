import { FC } from 'react';

interface Props { }

export const Text: FC<Props> = ({ }) => {
    return (
        <div className='flex flex-col gap-5 max-xl:items-center'>
            <h1 className='text-white font-[600] text-[44px] max-md:text-2xl'>Our Featured Products</h1>
            <h2 className='text-white font-medium text-2xl max-xl:text-center max-md:text-[15px]'>
                Lorem ipsum is a placeholder text commonly <br />
                used to demonstrate the visual form of <br /> a product
            </h2>
        </div>
    );
};