import { FC, PropsWithChildren } from 'react';

interface Props {}

export const AdapProfile: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className='flex flex-col absolute top-25 right-0 w-[230px] gap-5 z-100'>
        {children}
    </div>
  );
};