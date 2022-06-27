import { IRole } from "types/Role";
import { IUser } from "types/User";

export interface IUserCreateRes extends IUser {
  role: IRole
}

export interface IUserUpdateRes extends IUserCreateRes {}