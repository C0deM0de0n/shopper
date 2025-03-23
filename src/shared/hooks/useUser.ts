import { useQuery } from "@tanstack/react-query";
import { userService } from "@/shared";

export const useUserHook = () => {
    const { 
        refetch,
        data,
        isLoading: isLoadingUser, 
        isSuccess: isSuccessUser,
        isError: isErrorUser
    } = useQuery({
        queryKey: ['get user'],
        queryFn: () => userService.getById(),
        retry: false,
    })

    return { refetch, user: data?.data, isLoadingUser, isSuccessUser, isErrorUser }
}