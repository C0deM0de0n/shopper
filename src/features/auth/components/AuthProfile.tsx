'use client'
import { FC, useEffect } from 'react';
import { useUserHook } from '@/shared';
import { AuthCircle } from './AuthCircle';
import { AuthLogout } from './AuthLogout';
import { AuthButton } from './AuthButton';
import { AuthSkeleton } from './AuthSkeleton';
import { useLogoutHook } from '../hooks/useAuth';

interface Props { }

export const AuthProfile: FC<Props> = () => {
    const {user, isLoadingUser, isSuccessUser, isErrorUser } = useUserHook()
    const { logoutUser, isLoadingLogout, isSuccessLogout, isErrorLogout } = useLogoutHook()

    useEffect(() => {
        if(isSuccessLogout) {
            setTimeout(() => {
                window.location.reload()
            }, 200);
        }
    }, [isSuccessLogout])

    return (
        <>
            {isLoadingUser && <AuthSkeleton />}
            {isSuccessUser && user && !isSuccessLogout &&
                <div className='relative flex items-center gap-5 max-lg:justify-end'>
                    <div className='max-lg:hidden'>
                        <AuthCircle />
                    </div>
                    <AuthLogout 
                        logout={logoutUser}
                        loading={isLoadingLogout}
                        error={isErrorLogout}
                    />
                </div>
            }
            {(isErrorUser || isSuccessLogout) && <AuthButton />}
        </>

    );
};