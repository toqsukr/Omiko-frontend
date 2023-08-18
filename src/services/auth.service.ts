import { ILogin } from '@interfaces/sign.interface';
import axios from 'axios';

class AuthService {
  private URL = 'https://omiko-auth.onrender.com/';
  async registration(data: ILogin) {
    console.log(data);
    return axios.post(`${this.URL}user`, data);
  }

  async login(data: ILogin) {
    return axios.post(
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
