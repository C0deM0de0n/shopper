import Cookies from "js-cookie";
import { TokenType } from "../enums/tokens";
import { axiosClassic } from "../api/interceptors";
import { IUserResponse } from "../types/user";

export const getNewTokens =  {
    async getNewTokens() {
        const response = await axiosClassic.post<IUserResponse>(
            '/auth/access-token'
        )
        if(response.data.accessToken) saveTokenStorage(response.data.accessToken)

        return response
    }
}

export const getAccessToken = () => {
    const accessToken = Cookies.get(TokenType.accessToken)
    
    return accessToken || null
}

export const saveTokenStorage = (accessToken: string) => {
    Cookies.set(TokenType.accessToken, accessToken, {
        domain: 'localhost',
        sameSite: 'Strict',
        expires: 1
    })
}

export const removeFromStorage = () => {
    Cookies.remove(TokenType.accessToken)
}

