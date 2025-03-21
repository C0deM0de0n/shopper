import { IBase } from "./root";

export interface IUser extends IBase {
    email: string
    password: string
}