'use client'
import { useRef, useState } from 'react';
import Form from 'next/form'
import { useForm } from 'react-hook-form';
import { useAuthHook } from '../hooks/useAuth';
import { Input } from '../ui/Input';
import { useModalRef, IUser } from '@/shared';
import { FormButton } from './FormButton';
import { setAuthModal } from '../model/auth-slice';

export const AuthForm = ({ }) => {
  const closeRef = useRef<HTMLFormElement | null>(null)
  const [isLogin, setIsLoding] = useState<boolean>(true)
  const { authUser, isLoadingAuth, isErrorAuth } = useAuthHook()
  const { register, handleSubmit, formState: { errors }, reset } = useForm<IUser>()

  const setAuhtType = () => setIsLoding(!isLogin) 
  
  const onSubmit = (data: IUser) => {
    const type = isLogin ? 'login' : 'register'
    authUser({type, data, reset})
  }

  useModalRef({ 
    closeRef, 
    reduxFC: setAuthModal,
    data: false
  })

  return (
    <Form
      ref={closeRef}
      className='flex flex-col gap-5 w-96 h-96 p-5 bg-white rounded-2xl'
      formMethod='POST'
      onSubmit={handleSubmit(onSubmit)}
      action={''}>
      <h1 className='text-2xl'>{`${isLogin ? 'Войти' : 'Создать'}`}</h1>
      <Input register={register} errors={errors} />
      <FormButton isLogin={isLogin} setAuhtType={setAuhtType}/>
      {isLoadingAuth && <p className='text-center'>loading</p>}
      {isErrorAuth && <p className='tetx-center'>something went wrong please try again</p>}
    </Form>
  )
};