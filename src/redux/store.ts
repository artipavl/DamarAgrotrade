import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import basketSlice from './basket/basketSlice';
import likeSlice from './like/likeSlice';
import comparisonSlice from './comparison/comparisonSlice';

const store = configureStore({
  reducer: {
    basket: basketSlice,
    like: likeSlice,
    comparison: comparisonSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
