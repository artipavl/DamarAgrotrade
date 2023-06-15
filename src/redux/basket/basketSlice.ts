import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

// Define a type for the slice state

type tovar = {
  id: string;
  quantity: number;
  name: string;
  cost: number;
};

interface BasketState {
  tovars: tovar[];
}

// Define the initial state using that type
const initialState: BasketState = {
  tovars: [],
};

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    // increment: state => {
    //   state.value += 1;
    // },
    // decrement: state => {
    //   state.value -= 1;
    // },
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload;
    // },
    addToBasket: (state, action: PayloadAction<tovar>) => {
      console.log('ctart');
      const index = state.tovars.find(item => item.id === action.payload.id);

      if (index) {
        index.quantity = index.quantity + 1;
      } else {
        state.tovars.push(action.payload);
      }
    },
  },
});

export const { addToBasket } = basketSlice.actions;

export const selectCount = (state: RootState) => state.basket.tovars;

export default basketSlice.reducer;
