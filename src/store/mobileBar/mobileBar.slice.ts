import { createSlice } from '@reduxjs/toolkit';
import { IInitialMobileBarState, MobileBarState } from './mobileBar.interface';

const initialState: IInitialMobileBarState = {
  barState: MobileBarState.HOME
};

export const mobileBarSlice = createSlice({
  name: 'mobileBar',
  initialState,
  reducers: {
    changeBarState: (state, { payload: value }) => {
      const isMobileBarState = (value: any): value is MobileBarState => value in MobileBarState;

      if (!isMobileBarState(value)) return;
      state.barState = value;
    }
  }
});

export const { actions, reducer } = mobileBarSlice;
