'use client'
import Form from 'next/form'
import { useForm } from 'react-hook-form';
import { Button } from '@mui/material';
import { Input } from '../ui/input';
import { IAuthForm } from '../types/authForm';

export const AuthForm = ({ }) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<IAuthForm>()

  return (
    <Form
      className='flex flex-col gap-5 w-96 h-96 p-5 bg-white rounded-2xl'
      formMethod='POST'
      action={''}>
      <h1 className='text-2xl'>{'Войти'}</h1>
      <Input register={register} errors={errors} />
      <div className='flex items-center justify-center gap-5 w-full h-10'>
        <Button size={'large'} type={'submit'} variant={'outlined'}>Войти</Button>
        <Button size={'large'} type={'submit'} variant={'outlined'}>Создать</Button>
      </div>
    </Form>
  )
};