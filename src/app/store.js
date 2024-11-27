import { configureStore } from '@reduxjs/toolkit';
import appReducer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    app: appReducer,
  },
});
