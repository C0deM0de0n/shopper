import { FC } from 'react';
import { Logo } from './components/Logo';
import { Profile } from './components/profile';

interface Props { }

export const Header: FC<Props> = ({ }) => {

  return (
    <div className="flex items-center justify-between w-full h-44">
      <Logo />
      <Profile/>
    </div>
  );
};