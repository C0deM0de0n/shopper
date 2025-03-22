'use client'
import { FC } from 'react';
import { useAppDispatch } from '@/app/store';
import { setAuthModal } from '../model/auth-slice';

interface Props { }

export const AuthButton: FC<Props> = ({ }) => {
  const dispatch = useAppDispatch()

  return (
    <button
      onClick={() => dispatch(setAuthModal(true))}
      className='w-60 h-14 bg-[#10B981] rounded-2xl cursor-pointer'>
      <p className='text-white'>Login or Sign Up</p>
    </button>
  );
};