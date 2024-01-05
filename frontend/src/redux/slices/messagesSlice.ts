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
  isLoading: boolean;
}

const initialState: MessagesState = {
  messages: [],
  isLoading: false,
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
    builder.addCase(getAllMessages.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getAllMessages.fulfilled, (state, action) => {
      state.messages = action.payload;
      state.isLoading = false;
    }); 
    builder.addCase(postMessage.fulfilled, (state, action) => {
      state.messages.push(action.payload);
    });
  },
});

export const { addMessage } = messagesSlice.actions;
export default messagesSlice.reducer;
