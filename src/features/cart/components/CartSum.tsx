import { FC } from 'react';
import { Button } from '@mui/material';

interface Props {
    sum: number
}

export const CartSum: FC<Props> = ({ sum }) => {
    return (
        <div className='flex justify-between items-center w-full p-5 bg-white rounded-[5px]'>
            <h1 className='text-[20px] font-medium'>
                Total sum:
                <p className='text-[17px]'>{sum}$</p>
            </h1>
            <Button
                className='w-[230px] h-12 max-lg:w-[150px]'
                sx={{
                    backgroundColor: '#10B981',
                    '&:hover': { backgroundColor: '#20B2AA' }
                }}
                type={'button'}
                variant={'contained'}>
                <p className='text-white font-medium'>let's pay</p>
            </Button>
        </div>
    );
};