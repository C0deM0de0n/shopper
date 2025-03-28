'use client'
import { FC } from 'react';
import { useAppSelector } from '@/app/store';
import { useHeader } from './hooks/useHeader';
import { Logo } from './components/Logo';
import { FixedProfile } from './components/FixedProfile';
import { AuthProfile, CartButton } from '@/features';
import { Container } from "@/shared";
import { CartModal } from '@/features';

interface Props { }

export const Header: FC<Props> = ({ }) => {
  const { showCart } = useAppSelector(state => state.cartSlice)
  const { isScrolled, cartRef } = useHeader()

  return (
    <Container>
      <div ref={cartRef} className="relative flex items-center justify-between w-full h-28">
        <Logo />
        <FixedProfile isScrolled={isScrolled}>
          <div
            className='flex items-center gap-5'>
            <AuthProfile />
            <CartButton />
            {showCart && <CartModal />}
          </div>
        </FixedProfile>
      </div>
    </Container>

  );
};