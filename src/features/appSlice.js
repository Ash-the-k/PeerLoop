// src/features/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
  name: 'counter',
  initialState: {
    roomId: null,
  },
  reducers: {
    enterRoom: (state, action) => {
      state.roomId += action.payload.roomId;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { enterRoom } = appSlice.actions;

export const selectRoomId = state => state.app.roomId;

// Export the reducer to be used in the store
export default appSlice.reducer;
