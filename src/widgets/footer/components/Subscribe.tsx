import { FC } from 'react';
import Image from 'next/image';
import { TextField, Button } from '@mui/material';

interface Props { }

export const Subscribe: FC<Props> = ({ }) => {
    return (
        <div className='flex flex-col gap-5'>
            <h1 className='text-[22px] font-[400]'>
                Subscribe to our <br />
                Website
            </h1>
            <div className='flex gap-5 items-center'>
                <TextField 
                    type={'email'}
                    label='email'
                />
                <Button
                    className='relative w-[50px] h-[50px] rounded-[8px]' 
                    sx={{
                        backgroundColor: '#10B981',
                        '&:hover': { backgroundColor: '#20B2AA' }
                    }}
                    variant={'contained'}>
                    <Image 
                        width={20} height={20} 
                        src={'/row.svg'} alt='row'/>
                </Button>
            </div>
        </div>
    );
};