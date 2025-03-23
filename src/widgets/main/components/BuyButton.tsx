import { FC } from 'react';
import { Button } from '@mui/material';

interface Props { }

export const BuyButton: FC<Props> = ({ }) => {
  return (
    <Button
    className='w-[263px] h-[70px]'
      sx={{
        backgroundColor: '#10B981',
        '&:hover': { backgroundColor: '#20B2AA' }
      }}
      variant={'contained'}>
      <p className='text-white text-[16px] font-medium'>Buy Now</p>
    </Button>
  );
};