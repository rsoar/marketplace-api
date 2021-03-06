require("dotenv").config();
import bcrypt from "bcryptjs";
import {
  IDataSignIn,
  ISignInService,
  LoginResponse,
} from "../interface/base/ISignInService";
import { HttpError } from "../errors/HttpError";
import { IUser } from "../interface/IUser";
import { UserRepository } from "../repository/UserRepository";
import { Auth } from "../middlewares/Auth";

export class SignInService implements ISignInService {
  constructor(private readonly _repo: UserRepository) {}

  async getUser(data: IDataSignIn): Promise<LoginResponse> {
    if (
      Object.values(data)
        .map((m) => !!m)
        .includes(false)
    )
      throw new HttpError(401, "Invalid credentials");

    const user: IUser[] = await this._repo.getUserByEmail(data.email);

    if (!user.length) throw new HttpError(401, "Invalid credentials");

    if (!(await bcrypt.compare(data.password, user[0].senha)))
      throw new HttpError(401, "Invalid credentials");

    const jwtService = new Auth(user[0].id!);

    return {
      userId: user[0].id!,
      token: jwtService.generate(),
    };
  }
}
