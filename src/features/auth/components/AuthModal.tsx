'use client'
import { FC } from 'react';
import { AuthForm } from './AuthForm';
import { useUserHook } from '@/shared';
import { useAppSelector } from '@/app/store';

interface Props { }

export const AuthModal: FC<Props> = ({ }) => {
  const { authModal } = useAppSelector(state => state.authSlice)
  const { user, isSuccessUser, isErrorUser } = useUserHook()

  if (isSuccessUser && user) return null

  return (
    <>
      {(isErrorUser && authModal) &&
        <div className='fixed top-0 left-0 flex items-center justify-center w-full h-full bg-[#0000003d]'>
          <AuthForm/>
        </div>
      }
    </>
  );
};