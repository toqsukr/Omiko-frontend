import Cookies from 'js-cookie';
import { IAuthResponse, ITokens } from 'src/store/user/user.interface';
import { Tokens } from './auth.enum';
import { cookieConfig } from './cookie.config';

export const getAccessToken = () => {
  const accessToken = Cookies.get(Tokens.ACCESS_TOKEN);
  return accessToken || null;
};

export const getUserFromStorage = () => {
  return JSON.parse(localStorage.getItem('user') || '{}');
};

export const saveTokensStorage = (data: ITokens) => {
  Cookies.set(Tokens.ACCESS_TOKEN, data.accessToken, cookieConfig);
  Cookies.set(Tokens.REFRESH_TOKEN, data.refreshToken, cookieConfig);
};

export const deleteTokensStorage = () => {
  Cookies.remove(Tokens.ACCESS_TOKEN);
  Cookies.remove(Tokens.REFRESH_TOKEN);
};

export const removeFromStorage = () => {
  deleteTokensStorage();
  localStorage.removeItem('user');
};

export const saveToStorage = (data: IAuthResponse) => {
  saveTokensStorage(data.tokens);
  localStorage.setItem('user', JSON.stringify(data.user));
};
