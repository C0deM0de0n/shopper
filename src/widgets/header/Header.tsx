import { FC } from 'react';
import { Logo } from './components/Logo';
import { AuthProfile } from '@/features';

interface Props { }

export const Header: FC<Props> = ({ }) => {

  return (
    <div className="flex items-center justify-between w-full h-28">
      <Logo />
      <AuthProfile />
    </div>
  );
};