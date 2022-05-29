import { Request, Response } from "express";
import { ProductRepository } from "../repository/ProductRepository";
import { BaseService } from "../service/BaseService";

export interface IController {
  index: (req: Request, res: Response) => void;
}

export class HomeController implements IController {
  async index(req: Request, res: Response) {
    const baseService = new BaseService(new ProductRepository());
    const item = await baseService.getItems();

    return res.status(200).json({ data: { products: item } });
  }
}
