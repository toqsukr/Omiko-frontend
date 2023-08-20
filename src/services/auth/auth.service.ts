import axios from 'axios';
import Cookies from 'js-cookie';
import { SERVER_URL } from '@constants/constants';
import { getContentType } from '@api/api.helper';
import { instance } from '@api/api.interceptor';
import { ILogin } from '@interfaces/sign.interface';
import { IAuthResponse, saveToStorage } from './auth.helper';

export const AuthService = {
  async main(type: 'login' | 'register', data: ILogin) {
    const response = await instance<IAuthResponse>({
      url: `${SERVER_URL}/auth/${type}`,
      method: 'POST',
      data
    });
    if (response.data.accessToken) saveToStorage(response.data);

    return response.data;
  },

  async getNewTokens() {
    const refreshToken = Cookies.get('refreshToken');

    const response = await axios.post<string, { data: IAuthResponse }>(
      `${SERVER_URL}user`,
      { refreshToken },
      {
        headers: getContentType()
      }
    );
    if (response.data.accessToken) saveToStorage(response.data);
    return response;
  }
};
