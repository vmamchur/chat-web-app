import { configureStore } from '@reduxjs/toolkit';

import socketReducer from './slices/socketSlice';
import authReducer from './slices/authSlice';
import modalsReducer from './slices/modalsSlice';
import usersReducer from './slices/usersSlice';
import messagesSlice from './slices/messagesSlice';

export const store = configureStore({
  reducer: {
    socket: socketReducer,
    auth: authReducer,
    modals: modalsReducer,
    users: usersReducer,
    messages: messagesSlice,
  },
  middleware: (getDefaultMiddleware) => (
    getDefaultMiddleware({ serializableCheck: false })
  ),
});

export type RootState = ReturnType<typeof store.getState>;
export type RootDispatch = typeof store.dispatch;
