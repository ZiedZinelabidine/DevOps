import { createSlice } from '@reduxjs/toolkit'
import {getChatIdFromLocalStorage,  saveChatIdLocalStorage  } from '../../../core/helpers/storage';

export const chatIdSlice = createSlice({
  name: 'chatIdSlice',
  initialState: {
    chatId: getChatIdFromLocalStorage() || '',
  },
  reducers: {
    addChatId: (state, action) => {
      const { chatId } = action.payload;
      state.chatId     = chatId ;
      saveChatIdLocalStorage(chatId);
    },
  },
})
export default chatIdSlice.reducer
export const { addChatId } = chatIdSlice.actions

