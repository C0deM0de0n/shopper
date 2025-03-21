import { FC } from 'react';
import { TextField } from '@mui/material'
import type { UseFormRegister, FieldErrors } from 'react-hook-form';
import { IAuthForm } from '../types/authForm';

interface Props {
    register: UseFormRegister<IAuthForm>
    errors: FieldErrors<IAuthForm>
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