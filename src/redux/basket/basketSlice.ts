import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { product } from '../../BD/BD';

// Define a type for the slice state

type updateQuantityPayload = product & {
  id: string;
  quantity: number;
};
type tovar = product & {
  quantity: number;
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
    addToBasket: (state, action: PayloadAction<product>) => {
      const index = state.tovars.findIndex(
        item => item.id === action.payload.id
      );

      if (index !== -1) {
        state.tovars[index].quantity = state.tovars[index].quantity + 1;
      } else {
        state.tovars.push({ ...action.payload, quantity: 1 });
      }
    },
    updateQuantity: (state, action: PayloadAction<updateQuantityPayload>) => {
      const index = state.tovars.findIndex(
        item => item.id === action.payload.id
      );
      if (index !== -1) {
        state.tovars[index].quantity = action.payload.quantity;
      }
    },
  },
});

export const { addToBasket } = basketSlice.actions;

export const selectCount = (state: RootState) => state.basket.tovars;

export default basketSlice.reducer;
