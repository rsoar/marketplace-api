import { Request, Response } from "express";
import { IController } from "../interface/base/IController";

export class HomeController implements IController {
  async index(_: Request, res: Response) {
    return res.status(200).json({ response: { products: [] } });
  }
}
