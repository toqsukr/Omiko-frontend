import Cookies from 'js-cookie';
import { IAuthResponse, ITokens } from 'src/store/user/user.interface';

export const getAccessToken = () => {
  const accessToken = Cookies.get(Tokens.ACCESS_TOKEN);
  return accessToken || null;
};

export const getUserFromStorage = () => {
  return JSON.parse(localStorage.getItem('user') || '{}');
};

export const saveTokensStorage = (data: ITokens) => {
  Cookies.set(Tokens.ACCESS_TOKEN, data.accessToken);
  Cookies.set(Tokens.REFRESH_TOKEN, data.refreshToken);
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
  saveTokensStorage(data);
  localStorage.setItem('user', JSON.stringify(data.user));
};
