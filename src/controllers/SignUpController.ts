import { Request, Response } from "express";
import { UserRepository } from "../repository/UserRepository";
import { IController } from "../interface/base/IController";
import { IUser } from "../interface/IUser";
import { SignUpService } from "../service/SignUpService";
import { database } from "../config/database";
import { helper } from "../helpers/Helper";

const repo = new UserRepository(database, helper);
export class SignUpController implements IController {
  async store(req: Request, res: Response) {
    try {
      const data: IUser = req.body;
      const signUp = new SignUpService(repo);
      await signUp.create(data);

      return res.status(201).json({
        response: {
          status: 201,
          message: "User created successfully",
        },
      });
    } catch (error) {
      console.error(error);
      return res.status(400).json({ response: error });
    }
  }
}
