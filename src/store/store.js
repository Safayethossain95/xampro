/* eslint-disable no-unused-vars */
// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import exampleReducer from './exampleSlice';

export const store = configureStore({
  reducer: {
    example: exampleReducer,
  },
});