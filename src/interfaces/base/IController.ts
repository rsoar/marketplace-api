export interface IController {
  index: (req: Request, res: Response) => void;
  store: (req: Request, res: Response) => void;
  show: (req: Request, res: Response) => void;
  update: (req: Request, res: Response) => void;
}
