import { instance } from '@api/api.interceptor';
import { SERVER_URL } from '@constants/constants';
import axios, { AxiosResponse } from 'axios';
import Cookies from 'js-cookie';
import { IAuthResponse, IUsernamePassword } from 'src/store/user/user.interface';
import { Tokens } from './auth.enum';
import { removeFromLocalStorage, saveUserToStorage } from './auth.helper';
import { cookieConfig } from './cookie.config';

export const AuthService = {
  async login(data: IUsernamePassword) {
    const response = await instance<IAuthResponse>({
      url: `/auth/login`,
      method: 'POST',
      data
    });
    if (response.data.tokens) saveUserToStorage(response.data);

    return response.data;
  },

  async register(data: IUsernamePassword) {
    const response = await axios.post<{ data: IAuthResponse }>(SERVER_URL + '/user', data, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    return response.data;
  },

  async logout() {
    const refreshToken = Cookies.get('refreshToken');
    const response = await axios.post<{ data: AxiosResponse }>(
      SERVER_URL + '/auth/logout',
      { refreshToken },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${refreshToken}`
        }
      }
    );
    if (response.status === 200) removeFromLocalStorage('user');
    return response;
  },

  async getNewTokens() {
    const refreshToken = Cookies.get('refreshToken');

    const response = await axios.post<string, { data: { accessToken: string } }>(
      SERVER_URL + '/auth/refresh',
      { refreshToken },
      {
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${refreshToken}`
        }
      }
    );
    if (response.data) Cookies.set(Tokens.ACCESS_TOKEN, response.data.accessToken, cookieConfig);
    return response;
  }
};
