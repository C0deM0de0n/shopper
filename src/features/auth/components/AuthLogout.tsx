'use client'
import { FC } from 'react';
import { Button, CircularProgress } from '@mui/material';

interface Props { 
    logout: () => void
    loading: boolean
    error: boolean
}

export const AuthLogout: FC<Props> = ({ logout, loading, error }) => {

    if(error) {
        window.alert('Failed to log out please try again')
    }

    return (
        <>
            {loading
                ? <CircularProgress />
                : <Button
                    onClick={() => logout()}
                    type={'submit'}
                    className='w-40 h-12'
                    variant={'contained'}
                    sx={{
                        backgroundColor: '#10B981',
                        '&:hover': { backgroundColor: '#20B2AA' }
                    }}>
                    <h2>log out</h2>
                </Button>
            }
        </>

    );
};