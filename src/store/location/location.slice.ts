import { locationSPB } from '@components/header/location/location.data';
import { ILocation } from '@interfaces/location.interface';
import { createSlice } from '@reduxjs/toolkit';
import { removeFromLocalStorage } from '@services/auth/auth.helper';

const initialState: ILocation = localStorage.getItem('location')
  ? JSON.parse(localStorage.getItem('location') as string)
  : locationSPB;

const saveLocationToStorage = (data: ILocation) => {
  localStorage.setItem('location', JSON.stringify(data));
};

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
      if (JSON.parse(localStorage.getItem('user') as string)) {
        removeFromLocalStorage('location');
        saveLocationToStorage(location);
      }
    }
  }
});

export const { actions, reducer } = locationSlice;
