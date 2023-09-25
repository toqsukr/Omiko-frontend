import { createSlice } from '@reduxjs/toolkit';
import { isAtContainer } from '@utils/function';
import { ICartInitialState } from './cart.interface';

const initialState: ICartInitialState[] = [];

const isICartInitialState = (element: any): element is ICartInitialState =>
  typeof element === 'object' &&
  'count' in element &&
  'id' in element &&
  'price' in element &&
  'url' in element &&
  'title' in element;

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, { payload: addingElement }) => {
      addingElement = { count: 1, ...addingElement };
      if (!isICartInitialState(addingElement)) return;
      if (isAtContainer(state, addingElement.id))
        state.forEach(element => (element.id === addingElement.id ? (element.count += 1) : element));
      else state.push(addingElement);
    },
    removeFromCart: (state, { payload: removingElementID }) => {
      if (typeof removingElementID != 'number') return;
      const newState = state.filter(element => element.id != removingElementID);
      return newState;
    },
    increaseProductNumber: (state, { payload: increasingElement }) => {
      if (!isICartInitialState(increasingElement || increasingElement.count === 99)) return;
      state.forEach(element => (element.id == increasingElement.id ? (element.count += 1) : element));
    },
    decreaseProductNumber: (state, { payload: decreasingElement }) => {
      if (!isICartInitialState(decreasingElement) || decreasingElement.count === 1) return;
      state.forEach(element => (element.id == decreasingElement.id ? (element.count -= 1) : element));
    },
    setProductCount: (state, { payload: data }) => {
      const { id, value } = data;
      console.log(value);
      if (typeof value != 'number' || typeof id != 'number' || isNaN(value) || value <= 0) return;
      state.forEach(element => (element.id == id ? (element.count = value) : element));
    }
  }
});

export const { actions, reducer } = cartSlice;
