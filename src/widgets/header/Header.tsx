import { FC } from 'react';
import { Logo } from './components/Logo';
import { AuthProfile } from '@/features';
import { Container } from "@/shared";

interface Props { }

export const Header: FC<Props> = ({ }) => {

  return (
    <Container>
      <div className="flex items-center justify-between w-full h-28">
        <Logo />
        <AuthProfile />
      </div>
    </Container>

  );
};