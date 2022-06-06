import { Request, Response } from "express";
import { IController } from "../interface/base/IController";
import { IUser } from "../interface/IUser";
import { SignUpService } from "../service/SignUpService";

export class SignUpController implements IController {
  async store(req: Request, res: Response) {
    try {
      const data: IUser = req.body;
      const signUp = new SignUpService();
      await signUp.create(data);

      return res.status(201).json({
        response: {
          status: 201,
          message: "User created successfully",
        },
      });
    } catch (error) {
      console.error(error);
      return res.json({ response: error });
    }
  }
}
