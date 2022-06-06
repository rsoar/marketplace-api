export interface ISignInService {
  getUser: (data: any) => void;
}

export interface IDataSignIn {
  email: string;
  password: string;
}

export interface LoginResponse {
  userId: number;
  token: string;
}
