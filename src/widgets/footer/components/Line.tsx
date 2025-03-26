import { FC } from 'react';

interface Props {}

export const Line: FC<Props> = ({}) => {
  return (
    <span className='w-full h-[1px] bg-[#111111]'></span>
  );
};