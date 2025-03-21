import { FC } from 'react';
import { AuthForm } from '@/features';

interface Props { }

export const AuthModal: FC<Props> = ({ }) => {
  return (
    <div className='fixed top-0 left-0 flex items-center justify-center w-full h-full bg-[#0000003d]'>
      <AuthForm />
    </div>
  );
};