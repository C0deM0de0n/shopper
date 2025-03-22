import { FC } from 'react';
import { TextField } from '@mui/material'
import type { UseFormRegister, FieldErrors } from 'react-hook-form';
import { IUser } from '@/shared';

interface Props {
    register: UseFormRegister<IUser>
    errors: FieldErrors<IUser>
}

export const Input: FC<Props> = ({ register, errors }) => {
    return (
        <>
            <TextField
                label='Email'
                type='text'
                error={!!errors.password}
                helperText={errors.password?.message}
                {...register('email', { required: 'введите почту' })}
            />
            <TextField
                label='Password'
                type='password'
                error={!!errors.password}
                helperText={errors.password?.message}
                {...register('password', { required: 'введите пароль' })}
            />
        </>
    );
};