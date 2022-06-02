import { IUser } from "../IUser";

export interface IUserRepository {
  getUserByEmail: (email: string) => any;
  getUserById: (id: number) => any;
  createUser: (data: IUser) => any;
}
