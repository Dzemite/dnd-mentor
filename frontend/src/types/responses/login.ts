import { IUser } from "types/User";

export interface ILoginRes {
  jwt: string,
  user: IUser
}