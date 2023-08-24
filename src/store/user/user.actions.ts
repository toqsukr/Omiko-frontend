import { errorCatch } from '@api/api.helper';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AuthService } from '@services/auth/auth.service';
import { AxiosResponse } from 'axios';
import { IAuthResponse, IUsernamePassword } from './user.interface';

export const login = createAsyncThunk<IAuthResponse, IUsernamePassword>(
  '/auth/login',
  async (data, thunkApi) => {
    try {
      const response = await AuthService.login(data);
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
      await AuthService.register(data);
      const response = await AuthService.login(data);
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const logout = createAsyncThunk<AxiosResponse>('/auth/logout', async (_, thunkApi) => {
  try {
    const response = await AuthService.logout();
    return response;
  } catch (error) {
    return thunkApi.rejectWithValue(error);
  }
});

export const checkAuth = createAsyncThunk('/auth/refresh', async (_, thunkApi) => {
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
