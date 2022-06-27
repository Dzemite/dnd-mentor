import { IUser } from "types/User";

export interface UserState {
  user: IUser;
  isLoading: boolean;
  error: string;
}
