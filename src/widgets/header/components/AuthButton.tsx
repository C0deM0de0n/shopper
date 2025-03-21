import { FC } from 'react';

interface Props {}

export const AuthButton: FC<Props> = ({}) => {
  return (
    <button className='w-60 h-14 bg-[#10B981] text-white rounded-2xl cursor-pointer'>
        <p>Login or Sign Up</p>
    </button>
  );
};