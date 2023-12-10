import { configureStore } from '@reduxjs/toolkit';

import authSlice from './slices/authSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type RootDispatch = typeof store.dispatch;
