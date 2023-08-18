export interface ILogin {
  email: string;
  password: string;
}

export interface ISignInput extends ILogin {
  repeatPassword: string;
}
