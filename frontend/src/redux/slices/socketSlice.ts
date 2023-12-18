import { createSlice } from '@reduxjs/toolkit';
import { Socket } from 'socket.io-client';

interface SocketState {
  socketInstance: Socket | null;
};

const initialState: SocketState = {
  socketInstance: null,
};

const socketSlice = createSlice({
  name: 'socket',
  initialState,
  reducers: {
    setSocket: (state, action) => {
      state.socketInstance = action.payload;
    },
  },
});

export const { setSocket } = socketSlice.actions;

export default socketSlice.reducer;
