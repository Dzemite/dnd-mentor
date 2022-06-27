export interface IUserCreateReq {
  username: string,
  email: string,
  password: string,
  role: number,
  confirmed: boolean,
  blocked?: boolean,
}

export interface IUserUpdateReq extends IUserCreateReq {
  id: number
}