import { IUser } from "../IUser";

export interface ISignUpService {
  create: (data: IUser) => void;
}
