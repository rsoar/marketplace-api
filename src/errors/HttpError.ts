export class HttpError {
  public readonly message: string;
  public readonly statusCode: number;

  constructor(statusCode: number, message: string) {
    this.statusCode = statusCode;
    this.message = message;
  }
}
