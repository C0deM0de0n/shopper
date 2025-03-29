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
    const oneHourFromNow = new Date();
    oneHourFromNow.setHours(oneHourFromNow.getHours() + 1);

    Cookies.set(TokenType.accessToken, accessToken, {
        domain: 'elaborate-douhua-170d6e.netlify.app',
        sameSite: 'Strict',
        expires: oneHourFromNow
    })
}

export const removeTokenStorage = () => {
    Cookies.remove(TokenType.accessToken, { domain: 'elaborate-douhua-170d6e.netlify.app'})
}

