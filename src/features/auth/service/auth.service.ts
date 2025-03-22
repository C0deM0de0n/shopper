import { 
  axiosClassic, 
  saveTokenStorage, 
  IUser, 
  IUserResponse 
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
};
