'use client'
import { FC } from 'react';
import { useAppDispatch } from '@/app/store';
import { setAuthModal } from '../model/auth-slice';
import { Button } from '@mui/material';

interface Props { }

export const AuthButton: FC<Props> = ({ }) => {
  const dispatch = useAppDispatch()

  return (
    <Button
      onClick={() => dispatch(setAuthModal(true))}
      type={'submit'}
      className='w-60 h-14'
      sx={{
        backgroundColor: '#10B981',
        '&:hover': { backgroundColor: '#20B2AA' }
      }}
      variant={'contained'}>
      <p className='text-white text-[16px] font-medium'>Log In or Sign Up</p>
    </Button>
  );
};