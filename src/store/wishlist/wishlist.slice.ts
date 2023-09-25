import { ICardData } from '@interfaces/data.interface';
import { createSlice } from '@reduxjs/toolkit';
import { isAtContainer } from '@utils/function';

const initialState: ICardData[] = [];

const isICardData = (element: any): element is ICardData =>
  typeof element === 'object' &&
  'id' in element &&
  'price' in element &&
  'url' in element &&
  'title' in element;

export const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    toggleWishlist: (state, { payload: toggleElement }) => {
      if (!isICardData(toggleElement)) return;
      if (!isAtContainer(state, toggleElement.id)) state.push(toggleElement);
      else {
        const newState = state.filter(element => element.id != toggleElement.id);
        return newState;
      }
    }
  }
});

export const { actions, reducer } = wishlistSlice;
