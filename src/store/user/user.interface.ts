import { IUser } from '@interfaces/user.interface';

export interface IUserState {
  username: string;
}

export interface ITokens {
  accessToken: string;
  refreshToken: string;
}

export interface IInitialState {
  user: IUserState | null;
  isLoading: boolean;
  userNotFound: boolean;
  emailExist: boolean;
}

export interface IUsernamePassword {
  username: string;
  password: string;
}

export interface IAuthResponse {
  tokens: ITokens;
  user: IUser;
}
