import { Request, Response } from "express";
import { BaseCrudService } from "../service/BaseCrudService";
import { ProductRepository } from "../repository/ProductRepository";
// import { IController } from "../interfaces/base/IController";

export interface IController {
  index: (req: Request, res: Response) => void;
  store: (req: Request, res: Response) => void;
  show: (req: Request, res: Response) => void;
  update: (req: Request, res: Response) => void;
}

export class HomeController implements IController {
  async index(req: Request, res: Response) {
    try {
      const _service = new BaseCrudService(new ProductRepository());
      const items = await _service.list();
      return res.json({ data: { products: items } });
    } catch (err) {
      console.error(err);
      return res.status(400).send({ error: "Bad request" });
    }
  }
  store(req: Request, res: Response) {}
  show(req: Request, res: Response) {}
  update(req: Request, res: Response) {}
}
