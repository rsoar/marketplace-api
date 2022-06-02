import bcrypt from "bcryptjs";
import { ISignUpService } from "../interface/base/ISignUpService";
import { HttpError } from "../helpers/HttpError";
import { IUser } from "../interface/IUser";
import { UserRepository } from "../repository/UserRepository";
import { IUserRepository } from "../interface/base/IUserRepository";

export class SignUpService implements ISignUpService {
  private _repository: IUserRepository;

  constructor() {
    this._repository = new UserRepository();
  }

  async create(data: IUser) {
    if (data.email != data.confirmacaoEmail)
      throw new HttpError(400, "E-mail must be equal to confirmation e-mail");

    if (data.senha != data.confirmacaoSenha)
      throw new HttpError(
        400,
        "Password must be equal to confirmation password"
      );

    const regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
    const isValidEmail = regex.test(data.email);

    if (!isValidEmail) throw new HttpError(400, "Invalid e-mail");

    if (!!(await this._repository.getUserByEmail(data.email)).length)
      throw new HttpError(400, "This e-mail is already in use");

    const salt = await bcrypt.genSalt(8);
    const hash = await bcrypt.hash(data.senha, salt);

    await this._repository.createUser({
      nome: data.nome,
      sobrenome: data.sobrenome,
      email: data.email,
      senha: hash,
    } as IUser);
  }
}
