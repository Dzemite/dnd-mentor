export type User = {
  id: string,
  username: string,
  email?: string,
  confirmed?: boolean,
  blocked?: boolean,
};

export interface UserState {
  user: User;
  isLoading: boolean;
  error: string;
}
