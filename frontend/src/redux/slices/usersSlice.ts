import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { User } from '../../types/User';
import { usersService } from '../../services/usersService';

export const getUsers = createAsyncThunk(
  'users/getUsers',
  async (searchValue: string) => {
    const { data } = await usersService.getUsers(searchValue);

    return data;
  }
);

interface UsersState {
  users: User[];
  isLoading: boolean;
  selectedUser: User | null;
}

const initialState: UsersState = {
  users: [],
  isLoading: false,
  selectedUser: null,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    selectUser(state, action) {
      state.selectedUser = action.payload;
    },
    setUserStatus(state, action) {
      const { userId, isOnline } = action.payload;
      const user = state.users.find((user) => user.id === userId);

      if (user) {
        user.isOnline = isOnline;
      }
    },
    setLastSeen(state, action) {
      const { userId, lastSeen } = action.payload;
      const user = state.users.find((user) => user.id === userId);

      if (user) {
        user.lastSeen = lastSeen;
      }
    },
  },
  extraReducers(builder) {
    builder.addCase(getUsers.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.users = action.payload;
      state.isLoading = false;
    });
  },
});

export const { selectUser, setUserStatus, setLastSeen } = usersSlice.actions;

export default usersSlice.reducer;
