import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { LoginUserData, RegisterUserData } from '../../types/UserData';
import { User } from '../../types/User';
import { authService } from '../../services/authService';
import { saveAuthData, clearAuthData } from '../../helpers/authStorage';

export const register = createAsyncThunk(
  'auth/register',
  async (userData: RegisterUserData) => {
    const { data } = await authService.register(userData);

    const { user, accessToken, refreshToken } = data;

    if (!user || !accessToken || !refreshToken) {
      return null;
    }

    saveAuthData(accessToken, refreshToken);

    return user;
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (userData: LoginUserData) => {
    const { data } = await authService.login(userData);

    const { user, accessToken, refreshToken } = data;

    if (!user || !accessToken || !refreshToken) {
      return null;
    }

    saveAuthData(accessToken, refreshToken);

    return user;
  }
);

export const checkAuth = createAsyncThunk(
  'auth/checkAuth',
  async (refreshToken: string) => {
    const { data } = await authService.refresh(refreshToken);

    const { user, accessToken, refreshToken: newRefreshToken } = data;

    if (!user || !accessToken || !newRefreshToken) {
      return null;
    }

    saveAuthData(accessToken, newRefreshToken);

    return user;
  }
);

interface AuthState {
  currentUser: User | null;
  isChecked: boolean;
}

const initialState: AuthState = {
  currentUser: null,
  isChecked: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      clearAuthData();
      state.currentUser = null;
    },
  },
  extraReducers(builder) {
    builder.addCase(register.fulfilled, (state, action) => {
      state.currentUser = action.payload;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.currentUser = action.payload;
    });
    builder.addCase(checkAuth.fulfilled, (state, action) => {
      state.currentUser = action.payload;
      state.isChecked = true;
    });
    builder.addCase(checkAuth.rejected, (state) => {
      state.currentUser = null;
      state.isChecked = true;
    });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
