import { FC } from 'react';
import { AddButton } from '@/shared';
import { Button } from '@mui/material';


interface Props {}

export const Buttons: FC<Props> = ({}) => {
  return (
    <div className='flex'>
        <AddButton />
        <Button className='w-[263px] h-[70px]' variant={'text'}>
            <p className='text-white text-[16px] font-medium'>View more</p>
        </Button>
    </div>
  );
};