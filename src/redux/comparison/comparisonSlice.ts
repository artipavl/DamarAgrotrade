import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { product } from '../../BD/BD';

// Define a type for the slice state comparison
type deleteСomparisonType = {
  id: string;
};

interface СomparisonState {
  tovars: product[];
}

// Define the initial state using that type
const initialState: СomparisonState = {
  tovars: [],
};

export const comparisonSlice = createSlice({
  name: 'comparison',
  initialState,
  reducers: {
    addToСomparison: (state, action: PayloadAction<product>) => {
      const tovar = state.tovars.find(item => item.id === action.payload.id);

      if (tovar) {
        // state.tovars = state.tovars.filter(
        //   tovar => tovar.id !== action.payload.id
        // );
      } else {
        state.tovars.push(action.payload);
      }
    },

    deleteСomparison: (state, action: PayloadAction<deleteСomparisonType>) => {
      state.tovars = state.tovars.filter(
        tovar => tovar.id !== action.payload.id
      );
    },
  },
});

export const { addToСomparison, deleteСomparison } = comparisonSlice.actions;

export const selectСomparison = (state: RootState) => state.comparison.tovars;

export default comparisonSlice.reducer;
