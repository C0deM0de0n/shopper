import { 
  axiosClassic, 
  saveTokenStorage, 
  removeTokenStorage,
  IUser, 
  IUserResponse, 
  axiosWithAuth,
} from "@/shared";

export const authService = {
  async auth(type: "login" | "register", data: IUser) {
    const response = await axiosClassic.post<IUserResponse>(
      `/auth/${type}`,
      data
    );
    if (response.data.accessToken) saveTokenStorage(response.data.accessToken);

    return response.data;
  },

  async logout() {
    const response = await axiosWithAuth.post('/auth/logout')

    if(response.status === 200) removeTokenStorage()

    return response
  }
};
