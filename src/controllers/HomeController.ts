import { Request, Response } from "express";
import { IController } from "../interface/base/IController";
import { ProductRepository } from "../repository/ProductRepository";
import { BaseService } from "../service/BaseService";

export class HomeController implements IController {
  async index(_: Request, res: Response) {
    const baseService = new BaseService(new ProductRepository());
    const item = await baseService.getItems();

    return res.status(200).json({ response: { products: item } });
  }
}
