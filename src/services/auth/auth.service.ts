import { getContentType } from '@api/api.helper';
import { instance } from '@api/api.interceptor';
import { SignMode } from '@components/sign/sign.d';
import { SERVER_URL } from '@constants/constants';
import axios from 'axios';
import Cookies from 'js-cookie';
import { IAuthResponse, IUsernamePassword } from 'src/store/user/user.interface';
import { saveToStorage } from './auth.helper';

export const AuthService = {
  async login(data: IUsernamePassword) {
    const response = await instance<IAuthResponse>({
      url: `/auth/${SignMode.LOGIN}`,
      method: 'POST',
      data
    });
    if (response.data.tokens) saveToStorage(response.data);

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

  async getNewTokens() {
    const refreshToken = Cookies.get('refreshToken');

    const response = await axios.post<string, { data: IAuthResponse }>(
      process.env.SERVER_URL + '/auth/refresh',
      { refreshToken },
      {
        headers: getContentType()
      }
    );
    if (response.data.tokens) saveToStorage(response.data);
    return response;
  }
};
