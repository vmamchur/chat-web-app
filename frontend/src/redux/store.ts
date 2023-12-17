import { configureStore } from '@reduxjs/toolkit';

import authSlice from './slices/authSlice';
import modalsSlice from './slices/modalsSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    modals: modalsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type RootDispatch = typeof store.dispatch;
