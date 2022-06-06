require("dotenv").config();
import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { IAuth, Token } from "../interface/base/IAuh";
import { HttpError } from "../helpers/HttpError";

export class Auth implements IAuth {
  private _token: string | undefined;
  private _userId: number | undefined;
  private _privateKey: string;
  private _expires: string;

  constructor(userId?: number, token?: string) {
    this._userId = userId;
    this._token = token;
    this._privateKey = process.env.PRIVATE_KEY as string;
    this._expires = process.env.TOKEN_EXPIRES as string;
  }

  generate(): Token {
    this._token = jwt.sign({ userId: this._userId }, this._privateKey, {
      expiresIn: this._expires,
    });
    return this._token;
  }

  validate(req: Request, res: Response, next: NextFunction) {
    if (!req.headers.authorization) throw new HttpError(401, "Login required");

    const [_prefix, _token] = req.headers.authorization.split(" ");

    if (_prefix !== "Bearer") throw new HttpError(401, "Badly token formed");

    if (_token.split(".").length < 2)
      throw new HttpError(401, "Badly token formed");

    try {
      jwt.verify(_token, process.env.PRIVATE_KEY as string);
      next();
    } catch (error) {
      throw new HttpError(401, "Token invalid");
    }
  }

  decode(token: Token): string | JwtPayload {
    const [_prefix, _token] = token.split(" ");
    const decoded = jwt.verify(_token, process.env.PRIVATE_KEY as string);
    return decoded;
  }
}
