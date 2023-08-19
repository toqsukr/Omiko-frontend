import axios from 'axios';
import { ILogin } from '@interfaces/sign.interface';

class AuthService {
  private URL = 'https://omiko-auth.onrender.com/';
  async registration(data: ILogin) {
    return await axios.post(`${this.URL}user`, data);
  }

  async login(data: ILogin) {
    return await axios.post(
      `${this.URL}auth/login`,
      { username: data.email, ...data },
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
    );
  }
}

export default new AuthService();
