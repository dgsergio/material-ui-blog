import { configureStore } from '@reduxjs/toolkit';
import postsSliceReducer from './postsSlice';
import authSliceReducer from './authSlice';

export const store = configureStore({
  reducer: { posts: postsSliceReducer, auth: authSliceReducer },
});

export type AppDispatch = typeof store.dispatch;
