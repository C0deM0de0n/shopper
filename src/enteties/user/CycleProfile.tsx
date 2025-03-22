import { FC } from 'react';

interface Props {
    email: string
}

export const CycleProfile: FC<Props> = ({ email }) => {
    return (
        <div className='flex justify-center items-center w-14 h-14 bg-black rounded-full'>
            <p className='text-2xl text-white font-medium'>
                {email.charAt(0).toUpperCase()}
            </p>
        </div>
    );
};