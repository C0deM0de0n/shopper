'use client'
import { FC, useState } from 'react';
import Image from 'next/image';
import { useAppSelector } from '@/app/store';
import { useHeader } from './hooks/useHeader';
import { Logo } from './components/Logo';
import { FixedProfile } from './components/FixedProfile';
import { AuthProfile, CartButton } from '@/features';
import { Container } from "@/shared";
import { CartModal } from '@/features';
import { AdapProfile } from '../adaptive/AdapProfile';

interface Props { }

export const Header: FC<Props> = ({ }) => {
  const [showAdapProfile, setShowAdapProfile] = useState<boolean>(false)
  const { showCart } = useAppSelector(state => state.cartSlice)
  const { isScrolled, cartRef } = useHeader()

  return (
    <Container>
      <div ref={cartRef} className="relative flex items-center justify-between w-full h-28">
        <Logo />
        <FixedProfile isScrolled={isScrolled}>
          <div
            className='flex items-center gap-5'>
            <div className='max-lg:hidden'>
              <AuthProfile />
            </div>
            <div 
              onClick={() => setShowAdapProfile(!showAdapProfile)}
              className='relative flex justify-center items-center bg-[#10B981] rounded-2xl w-14 h-14 min-lg:hidden max-sm:w-12 max-sm:h-12'>
              <Image
                src={'/Profile.svg'} width={20} height={20} alt='profile' />
            </div>
              <CartButton />
            {showCart && <CartModal />}
            {showAdapProfile && 
              <AdapProfile>
                <AuthProfile />
              </AdapProfile>
            }
          </div>
        </FixedProfile>
      </div>
    </Container>

  );
};