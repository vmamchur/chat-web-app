import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { User } from '../../types/User';
import { usersService } from '../../services/usersService';

export const getAllUsers = createAsyncThunk(
  'users/getAllUsers',
  async () => {
    const { data } = await usersService.getAllUsers();

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
  },
  extraReducers(builder) {
    builder.addCase(getAllUsers.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getAllUsers.fulfilled, (state, action) => {
      state.users = action.payload;
      state.isLoading = false;
    });
  },
});

export const { selectUser } = usersSlice.actions;

export default usersSlice.reducer;
