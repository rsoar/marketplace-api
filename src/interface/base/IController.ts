import { Request, Response } from "express";

export interface IController {
  index?: (req: Request, res: Response) => Promise<Response>;
  store?: (req: Request, res: Response) => Promise<Response>;
}
