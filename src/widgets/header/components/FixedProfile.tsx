import { FC, PropsWithChildren } from 'react';

interface Props {
    isScrolled: boolean
}

export const FixedProfile: FC<PropsWithChildren<Props>> = ({ children, isScrolled }) => {
  return (
    <div  className={`
        flex w-7xl h-28 justify-end transition-all 300 ease-in-out z-50
         ${isScrolled ? 'fixed translate-y-10 ' : 'absolute'}
      `}>
        {children}
    </div>
  );
};