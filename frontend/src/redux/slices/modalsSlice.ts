import { createSlice } from '@reduxjs/toolkit';

interface ModalsState {
  profile: boolean;
  settings: boolean;
}

const initialState: ModalsState = {
  profile: false,
  settings: false,
};

const modalsSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action) => {
      const modalName = action.payload as keyof ModalsState;

      state[modalName] = true;
    },
    closeModal: (state, action) => {
      const modalName = action.payload as keyof ModalsState;

      state[modalName] = false;
    },
  },
});

export const { openModal, closeModal } = modalsSlice.actions;
export default modalsSlice.reducer;

