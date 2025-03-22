'use client'
import { FC } from 'react';
import { useUserHook } from '@/shared';
import { CycleProfile } from '@/enteties';
import { AuthButton } from './AuthButton';

interface Props { }

export const Profile: FC<Props> = ({ }) => {
    const { user, isLoadingUser, isSuccessUser, isErrorUser } = useUserHook()
    return (
        <div>
            {isLoadingUser && <p>loading</p>}
            {isSuccessUser && user && <CycleProfile email={user.email} />}
            {isErrorUser&& <AuthButton />}
        </div>
    );
};