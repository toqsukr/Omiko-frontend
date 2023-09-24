import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE } from 'redux-persist';
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/es/persistStore';
import storage from 'redux-persist/lib/storage';
import { cartSlice } from './cart/cart.slice';
import { locationSlice } from './location/location.slice';
import { mobileBarSlice } from './mobileBar/mobileBar.slice';
import { userSlice } from './user/user.slice';

const persistConfig = {
  key: 'vkusnaya-kosmetika',
  storage,
  whitelist: ['cart']
};

const rootReducer = combineReducers({
  user: userSlice.reducer,
  location: locationSlice.reducer,
  mobileBar: mobileBarSlice.reducer,
  cart: cartSlice.reducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
});

export const persistor = persistStore(store);

export type TypeRootState = ReturnType<typeof rootReducer>;
