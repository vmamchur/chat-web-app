import { configureStore } from '@reduxjs/toolkit';

import socketReducer from './slices/socketSlice';
import authReducer from './slices/authSlice';
import modalsReducer from './slices/modalsSlice';

export const store = configureStore({
  reducer: {
    socket: socketReducer,
    auth: authReducer,
    modals: modalsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type RootDispatch = typeof store.dispatch;
