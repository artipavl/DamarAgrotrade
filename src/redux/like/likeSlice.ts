import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { product } from '../../BD/BD';

// Define a type for the slice state like
type deleteLikeType = {
  id: string;
};

interface LikeState {
  tovars: product[];
}

// Define the initial state using that type
const initialState: LikeState = {
  tovars: [],
};

export const likeSlice = createSlice({
  name: 'like',
  initialState,
  reducers: {
    addToLike: (state, action: PayloadAction<product>) => {
      const tovar = state.tovars.find(item => item.id === action.payload.id);

      if (tovar) {
        state.tovars = state.tovars.filter(
          tovar => tovar.id !== action.payload.id
        );
      } else {
        state.tovars.push(action.payload);
      }
    },

    deleteLike: (state, action: PayloadAction<deleteLikeType>) => {
      state.tovars = state.tovars.filter(
        tovar => tovar.id !== action.payload.id
      );
    },
  },
});

export const { addToLike, deleteLike } = likeSlice.actions;

export const selectLike = (state: RootState) => state.like.tovars;

export default likeSlice.reducer;
