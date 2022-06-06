import { NextFunction, Request, Response } from "express";
import { JwtPayload } from "jsonwebtoken";

export interface IAuth {
  generate: () => Token;
  validate: (req: Request, res: Response, next: NextFunction) => void;
  decode: (token: Token) => string | JwtPayload;
}

export type Token = string;
