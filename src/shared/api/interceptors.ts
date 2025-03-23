import axios, { type CreateAxiosDefaults } from "axios";
import { getNewTokens, getAccessToken, removeTokenStorage} from "../services/token.service.";
import { errorCatch } from "./error";

const options: CreateAxiosDefaults = {
  baseURL: "http://localhost:3000/api",
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
};

const axiosClassic = axios.create(options);
const axiosWithAuth = axios.create(options)

axiosWithAuth.interceptors.request.use((config) => {
  const accessToken = getAccessToken();

  if (config?.headers && accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});

axiosWithAuth.interceptors.response.use(
    config => config,
    async error => {
        const originalRequest = error.config

        if(
            error?.response?.status === 401 ||
            errorCatch(error) === 'Invalid or expired token' || 
            errorCatch(error) === 'jwt must be provided' &&
            error.config && !error.config._IsRerty
        ) {
            originalRequest._IsRerty = true
            try {
                await getNewTokens.getNewTokens()
                return axiosWithAuth.request(originalRequest)
            } catch {
                if(errorCatch(error) === 'Invalid or expired token') removeTokenStorage()
            }
        }

        throw error
    }
)

export { axiosClassic, axiosWithAuth }
