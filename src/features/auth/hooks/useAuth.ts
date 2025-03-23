import { useMutation, useQueryClient } from "@tanstack/react-query"
import { authService,  } from "../service/auth.service"
import { UseFormReset } from "react-hook-form"
import { useAppDispatch } from "@/app/store"
import { setAuthModal } from "../model/auth-slice"
import { IUser } from "@/shared"


export const useAuthHook = () => {
    const queryClient = useQueryClient()
    const dispatch = useAppDispatch()
    const {
        mutate: authUser, 
        isPending: isLoadingAuth, 
        isSuccess: isSuccessAuth,
        isError: isErrorAuth
    } = useMutation({
        mutationKey: ['auth'],
        mutationFn: (
            data: {
                type: 'login' | 'register', 
                data: IUser,
                reset: UseFormReset<IUser>
        }) => authService.auth(data.type, data.data),
        onSuccess: (_, variables) => {
            queryClient.invalidateQueries({ queryKey: ['get user'] })
            variables.reset()
            dispatch(setAuthModal(false))
        },
        retry: false
    })

    return { authUser, isLoadingAuth, isSuccessAuth, isErrorAuth }
}

export const useLogoutHook = () => {

    const { 
        mutate: logoutUser,
        isPending: isLoadingLogout,
        isSuccess: isSuccessLogout,
        isError: isErrorLogout
    } = useMutation({
        mutationKey: ['logout'],
        mutationFn: () => authService.logout(),
        retry: false
    })

    return { logoutUser, isLoadingLogout, isSuccessLogout, isErrorLogout }
}