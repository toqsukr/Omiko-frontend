import { errorCatch } from '@api/api.helper';
import { SignMode } from '@components/sign/sign.d';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { removeFromStorage } from '@services/auth/auth.helper';
import { AuthService } from '@services/auth/auth.service';
import { IAuthResponse, IUsernamePassword } from './user.interface';

export const login = createAsyncThunk<IAuthResponse, IUsernamePassword>(
  '/auth/login',
  async (data, thunkApi) => {
    try {
      const response = await AuthService.main(SignMode.LOGIN, data);
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const register = createAsyncThunk<IAuthResponse, IUsernamePassword>(
  '/user',
  async (data, thunkApi) => {
    try {
      await AuthService.main(SignMode.REGISTER, data);
      const response = await AuthService.main(SignMode.LOGIN, data);
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const logout = createAsyncThunk('/auth/logout', async () => {
  removeFromStorage();
});

export const checkAuth = createAsyncThunk<IAuthResponse>('/auth/refresh', async (_, thunkApi) => {
  try {
    const response = await AuthService.getNewTokens();
    return response.data;
  } catch (error) {
    if (errorCatch(error) === 'jwt expired') {
      thunkApi.dispatch(logout());
    }
    return thunkApi.rejectWithValue(error);
  }
});
