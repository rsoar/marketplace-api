import { Request, Response } from "express";
import { UserRepository } from "../repository/UserRepository";
import { IController } from "../interface/base/IController";
import { SignInService } from "../service/SignInService";
import { database } from "../config/database";
import { helper } from "../helpers/Helper";

const repo = new UserRepository(database, helper);
export class SignInController implements IController {
  async store(req: Request, res: Response) {
    const { email, password } = req.body;
    try {
      const service = new SignInService(repo);
      const user = await service.getUser({ email, password });

      return res.status(200).json({
        response: {
          status: 200,
          message: "User logged successfully",
          user: user,
        },
      });
    } catch (error) {
      console.error(error);
      return res.status(401).json({ response: error });
    }
  }
}
