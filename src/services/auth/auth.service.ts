import axios from 'axios';
import { SERVER_URL } from 'src/constants/constants';
import Cookies from 'js-cookie';
import { getContentType } from 'src/api/api.helper';
import { IAuthResponse, saveToStorage } from './auth.helper';
import { ILogin } from '@interfaces/sign.interface';
import { instance } from 'src/api/api.interceptor';

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
