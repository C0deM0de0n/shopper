import { FC, PropsWithChildren } from 'react';

export const Container: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className='w-7xl m-auto max-xl:w-4xl max-lg:w-2xl max-md:w-96 max-sm:w-72'>{children}</div>
  );
};