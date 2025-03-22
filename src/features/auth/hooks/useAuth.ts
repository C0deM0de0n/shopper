import { useMutation, useQueryClient } from "@tanstack/react-query"
import { authService } from "../service/auth.service"
import { UseFormReset } from "react-hook-form"
import { IUser } from "@/shared"


export const useAuthHook = () => {
    const queryClient = useQueryClient()
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
        },
        retry: false
    })

    return { authUser, isLoadingAuth, isSuccessAuth, isErrorAuth }
}