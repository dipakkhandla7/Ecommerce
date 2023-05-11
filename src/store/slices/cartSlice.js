import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isCartOpen: false,
  cartItem: [],
};

const cartslice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggleCart(state, action) {
      state.isCartOpen = action.payload;
    },

    addItem(state, action) {
      console.log(action.payload);
      const newItemId = action.payload.id;
      console.log(newItemId);

      const existingItem = state.cartItem.find((item) => item.id === newItemId);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.cartItem.push(action.payload);
      }
    },

    removeItem(state, action) {
      state.cartItem = state.cartItem.filter(
        (item) => item.id !== action.payload
      );
    },

    incrementItem(state, action) {
      state.cartItem = state.cartItem.map((item) => {
        if (item.id === action.payload) {
          item.quantity++;
        }
        return item;
      });
    },

    decrementItem(state, action) {
      state.cartItem = state.cartItem
        .map((item) => {
          if (item.id === action.payload) {
            item.quantity--;
          }
          return item;
        })
        .filter((item) => item.quantity !== 0);
    },
  },
});

export const { addItem, toggleCart, removeItem, incrementItem, decrementItem } =
  cartslice.actions;
export default cartslice.reducer;
