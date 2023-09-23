import Cookies from 'js-cookie';
import { IAuthResponse, ITokens } from 'src/store/user/user.interface';
import { Tokens } from './auth.enum';
import { cookieConfig } from './cookie.config';

export const getAccessToken = () => {
  const accessToken = Cookies.get(Tokens.ACCESS_TOKEN);
  return accessToken || null;
};

export const getFromLocalStorage = (key: string) => {
  return JSON.parse(localStorage.getItem(key) || '{}');
};

export const saveTokensStorage = (data: ITokens) => {
  Cookies.set(Tokens.ACCESS_TOKEN, data.accessToken, cookieConfig);
  Cookies.set(Tokens.REFRESH_TOKEN, data.refreshToken, cookieConfig);
};

export const deleteTokensStorage = () => {
  Cookies.remove(Tokens.ACCESS_TOKEN);
  Cookies.remove(Tokens.REFRESH_TOKEN);
};

export const removeFromLocalStorage = (key: string) => {
  deleteTokensStorage();
  localStorage.removeItem(key);
};

export const saveUserToStorage = (data: IAuthResponse) => {
  saveTokensStorage(data.tokens);
  localStorage.setItem('user', JSON.stringify(data.user));
};
