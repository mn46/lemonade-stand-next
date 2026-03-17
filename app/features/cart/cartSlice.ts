import { CartItem } from "@/app/types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: CartItem[] = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      return [...state, { amount: 1, ...action.payload }];
    },
    removeFromCart: (state, action) => {
      return state.filter((item) => item.idDrink !== action.payload);
    },
    incrementAmount: (state, action) => {
      const item = state.find((item) => item.idDrink === action.payload);

      if (!item) return;

      item.amount++;

      state.map((elem) => (elem.idDrink === item?.idDrink ? item : elem));
    },
    decrementAmount: (state, action) => {
      const item = state.find((item) => item.idDrink === action.payload);

      if (item?.amount === 1 || !item) return;

      item.amount--;

      state.map((elem) => (elem.idDrink === item?.idDrink ? item : elem));
    },
  },
});

export const { addToCart, removeFromCart, incrementAmount, decrementAmount } =
  cartSlice.actions;
export default cartSlice.reducer;
