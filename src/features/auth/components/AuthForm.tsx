'use client'
import { useRef, useState } from 'react';
import Form from 'next/form'
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { useAuthHook } from '../hooks/useAuth';
import { AuthFormInput } from './AuthFormInput';
import { useModalRef, IUser } from '@/shared';
import { AuthEntryBtn } from './AuthEntryBtn';
import { CircularProgress } from '@mui/material';
import { setAuthModal } from '../model/auth-slice';
import { useAppDispatch } from '@/app/store';



export const AuthForm = ({ }) => {
  const closeRef = useRef<HTMLFormElement | null>(null)
  const [isLogin, setIsLoding] = useState<boolean>(true)
  const { authUser, isLoadingAuth, isErrorAuth } = useAuthHook()
  const { register, handleSubmit, formState: { errors }, reset } = useForm<IUser>()
  const dispatch = useAppDispatch()

  const setAuhtType = () => setIsLoding(!isLogin)

  const onSubmit = (data: IUser) => {
    const type = isLogin ? 'login' : 'register'
    authUser({ type, data, reset })
  }

  useModalRef({
    closeRef,
    reduxFC: setAuthModal,
    data: false
  })

  return (
    <Form
      ref={closeRef}
      className='flex flex-col gap-5 w-96 h-86 p-5 bg-white rounded-2xl'
      formMethod='POST'
      onSubmit={handleSubmit(onSubmit)}
      action={''}>
      <div className='flex justify-between items-center w-full'>
        <h1 className='text-2xl'>{`${isLogin ? 'Войти' : 'Создать'}`}</h1>
        <Image
          onClick={() => dispatch(setAuthModal(false))}
          className='bg-gray-200 rounded-[5px] cursor-pointer'
          src={'/Closer.svg'}
          alt={'closer'}
          width={25} height={25}
        />
      </div>
      <AuthFormInput register={register} errors={errors} />
      <AuthEntryBtn isLogin={isLogin} setAuhtType={setAuhtType} />
      {isLoadingAuth && <CircularProgress className='m-auto'/>}
      {isErrorAuth && <p className='tetx-center'>something went wrong please try again</p>}
    </Form>
  )
};