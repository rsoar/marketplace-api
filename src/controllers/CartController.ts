import { Request, Response } from "express";
import { Auth } from "../middlewares/Auth";
import { IController } from "../interface/base/IController";

export class CartController implements IController {
  async index(req: Request, res: Response) {
    const auth = new Auth();
    const user = auth.decode(req.headers.authorization as string);
    console.log(user);
    return res.send({
      response: {
        status: "ok",
      },
    });
  }
}
