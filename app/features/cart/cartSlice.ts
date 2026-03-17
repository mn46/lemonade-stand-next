import { CartItem } from "@/app/types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: CartItem[] = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.find(
        (item) => item.idDrink === action.payload.idDrink,
      );

      if (item) {
        item.amount++;
      } else {
        return [...state, { amount: 1, ...action.payload }];
      }
    },
    addToCartWithAmount: (state, action) => {
      const item = state.find(
        (item) => item.idDrink === action.payload.idDrink,
      );

      if (item) {
        item.amount += action.payload.amount;
      } else {
        return [...state, action.payload];
      }
    },
    removeFromCart: (state, action) => {
      return state.filter((item) => item.idDrink !== action.payload);
    },
    incrementAmount: (state, action) => {
      const item = state.find((item) => item.idDrink === action.payload);

      if (!item) return;

      item.amount++;
    },
    decrementAmount: (state, action) => {
      const item = state.find((item) => item.idDrink === action.payload);

      if (item?.amount === 1 || !item) return;

      item.amount--;
    },
  },
});

export const {
  addToCart,
  addToCartWithAmount,
  removeFromCart,
  incrementAmount,
  decrementAmount,
} = cartSlice.actions;
export default cartSlice.reducer;
