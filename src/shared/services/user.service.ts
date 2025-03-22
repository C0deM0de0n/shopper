import { axiosWithAuth } from "../api/interceptors"
import { IUser } from "../types/user"

export const userService = {
    async getById() {
        const response = await axiosWithAuth.get<IUser>('/user/getById')
        return response
    }
}