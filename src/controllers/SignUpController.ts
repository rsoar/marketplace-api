import { Request, Response } from "express";
import { IController } from "src/interface/base/IController";
import { IUser } from "../interface/IUser";
import { SignUpService } from "../service/SignUpService";

export class SignUpController implements IController {
  async index(_: Request, res: Response) {
    return res.send("Not implemented");
  }

  async store(req: Request, res: Response) {
    try {
      const data: IUser = req.body;
      const signUp = new SignUpService();
      await signUp.create(data);
      return res.status(200).json({
        response: {
          message: "User created successfully",
        },
      });
    } catch (error) {
      console.error(error);
      return res.json({ response: error });
    }
  }
}
