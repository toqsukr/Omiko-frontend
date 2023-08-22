import axios from 'axios';
import Cookies from 'js-cookie';
import { getContentType } from '@api/api.helper';
import { instance } from '@api/api.interceptor';
import { SignMode } from '@components/sign/sign';
import { IUsernamePassword, IAuthResponse } from 'src/store/user/user.interface';
import { saveToStorage } from './auth.helper';

export const AuthService = {
  async main(type: SignMode, data: IUsernamePassword) {
    const response = await instance<IAuthResponse>({
      url: `/auth/${type}`,
      method: 'POST',
      data
    });
    if (response.data.tokens) saveToStorage(response.data);

    return response.data;
  },

  async getNewTokens() {
    const refreshToken = Cookies.get('refreshToken');

    const response = await axios.post<string, { data: IAuthResponse }>(
      process.env.SERVER_URL + '/user',
      { refreshToken },
      {
        headers: getContentType()
      }
    );
    if (response.data.tokens) saveToStorage(response.data);
    return response;
  }
};
