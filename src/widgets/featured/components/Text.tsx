import { FC } from 'react';

interface Props { }

export const Text: FC<Props> = ({ }) => {
    return (
        <div className='flex flex-col gap-5'>
            <h1 className='text-white font-[600] text-[44px]'>Our Featured Products</h1>
            <h2 className='text-white font-medium text-2xl'>
                Lorem ipsum is a placeholder text commonly <br />
                used to demonstrate the visual form of <br /> a product
            </h2>
        </div>
    );
};