import { FC } from 'react';
import Image from 'next/image';
import { Button } from '@mui/material';

interface Props { }

export const AuthCircle: FC<Props> = ({ }) => {
    return (
        <Button
            className='relative flex items-center w-15 h-15'
            variant={'contained'}
            sx={{
                backgroundColor: '#10B981',
                borderRadius: '100%',
                '&:hover': { backgroundColor: '#20B2AA' }
            }}>
            <Image
                src={'/Profile.svg'}
                width={17} height={17}
                alt='profile'
            />
        </Button>
    );
};