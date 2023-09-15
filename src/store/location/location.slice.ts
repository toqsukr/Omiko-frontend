import { locationSPB } from '@components/header/location/location.data';
import { ILocation } from '@interfaces/location.interface';
import { createSlice } from '@reduxjs/toolkit';

const initialState: ILocation = locationSPB;

export const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    changeLocation: (state, { payload: location }) => {
      const isILocation = (location: any): location is ILocation =>
        location && location.city && location.phoneNumbers && location.description;
      if (!isILocation(location)) return;
      state.city = location.city;
      state.description = location.description;
      state.phoneNumbers = location.phoneNumbers;
    }
  }
});

export const { actions, reducer } = locationSlice;
