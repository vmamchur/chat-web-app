import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Message } from '../../types/Message';
import { messagesService } from '../../services/messagesService';

export const getAllMessages = createAsyncThunk(
  'messages/getAllMessages',
  async (userId: string) => {
    const { data } = await messagesService.getAllMessages(userId);

    return data;
  }
);

interface PostMessageArgs {
  userId: string;
  text: string;
}

export const postMessage = createAsyncThunk(
  'messages/postMessage',
  async ({ userId, text }: PostMessageArgs) => {
    const { data } = await messagesService.postMessage(userId, text);

    return data;
  }
);

interface MessagesState {
  messages: Message[];
}

const initialState: MessagesState = {
  messages: [],
};

const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    addMessage(state, action) {
      state.messages.push(action.payload);
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getAllMessages.fulfilled, (state, action) => {
      state.messages = action.payload;
    });
    builder.addCase(postMessage.fulfilled, (state, action) => {
      state.messages.push(action.payload);
    });
  },
});

export const { addMessage } = messagesSlice.actions;
export default messagesSlice.reducer;
