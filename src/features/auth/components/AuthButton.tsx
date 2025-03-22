import { FC } from 'react';
import { Button } from '@mui/material';

interface Props { 
    isLogin: boolean
    setAuhtType: () => void
}

export const AuthButton: FC<Props> = ({ isLogin, setAuhtType }) => {
    return (
        <div className='flex items-center justify-center gap-5 w-full h-10'>
            <Button
                className='w-full h-10'
                type={'button'}
                variant={'outlined'}
                onClick={() => setAuhtType()}
            >
                {isLogin ? 'sign out': 'login'}
            </Button>
            <Button className='w-full h-10' type={'submit'} variant={'contained'}>
                {isLogin ? 'login' : 'sign out'}
            </Button>
        </div>
    );
};