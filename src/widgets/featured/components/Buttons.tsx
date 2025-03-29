import { FC } from 'react';
import { Button } from '@mui/material';


interface Props { }

export const Buttons: FC<Props> = ({ }) => {
  return (
    <div className='flex max-md:flex-col max-md:items-center'>
      <Button
        className={`w-[263px] h-[70px]`}
        sx={{
          backgroundColor: '#10B981',
          '&:hover': { backgroundColor: '#20B2AA' }
        }}
        variant={'contained'}>
        <p className='text-white text-[16px] font-medium'>Add to cart</p>
      </Button>
      <Button className='w-[263px] h-[70px]' variant={'text'}>
        <p className='text-white text-[16px] font-medium'>View more</p>
      </Button>
    </div>
  );
};