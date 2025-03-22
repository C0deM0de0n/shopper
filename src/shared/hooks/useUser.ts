import { useQuery } from "@tanstack/react-query";
import { userService } from "@/shared";

export const useUserHook = () => {
    const { 
        data,
        isLoading: isLoadingUser, 
        isSuccess: isSuccessUser,
        isError: isErrorUser
    } = useQuery({
        queryKey: ['get user'],
        queryFn: () => userService.getById(),
        retry: false,
        staleTime: 1000 * 60 * 5,
        gcTime: 1000 * 60 * 10,
    })

    return { user: data?.data, isLoadingUser, isSuccessUser, isErrorUser }
}