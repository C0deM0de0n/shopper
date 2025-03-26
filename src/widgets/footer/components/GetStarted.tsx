import { FC } from 'react';
import { Button } from '@mui/material';

interface Props { }

export const GetStarted: FC<Props> = ({ }) => {
    return (
        <div className='flex justify-end'>
            <div className='flex items-center gap-10'>
                <h1 className='text-[22px] font-[400]'>Ready to get started?</h1>
                <Button
                    className='w-[175px] h-[50px]'
                    sx={{
                        backgroundColor: '#10B981',
                        '&:hover': { backgroundColor: '#20B2AA' }
                    }}
                    variant={'contained'}>
                    Get started
                </Button>
            </div>
        </div>
    );
};