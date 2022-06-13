import { IUser } from "../IUser";

export interface IUserRepository {
  getUserByEmail: (email: string) => Promise<IUser[]>;
  getUserById: (id: number) => Promise<IUser[]>;
  createUser: (data: IUser) => Promise<void>;
}
