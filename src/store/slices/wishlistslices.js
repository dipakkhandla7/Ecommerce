import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isWishlistOpen: false,
  wishlistData: [],
};

const wishlistSlices = createSlice({
  name: "Wishlist",
  initialState,
  reducers: {
    togglewishlist(state, action) {
      // console.log(action.payload);
      state.isWishlistOpen = action.payload;
    },

    addwish(state, action) {
      const newItemId1 = action.payload.id;
      console.log(newItemId1);

      const existingItem1 = state.wishlistData.find(
        (item) => item.id === newItemId1
      );

      if (existingItem1) {
        alert("wishlist");
      } else {
        state.wishlistData.push(action.payload);
      }
    },
    removeItemwish(state, action) {
      state.wishlistData = state.wishlistData.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const { togglewishlist, addwish, removeItemwish } =
  wishlistSlices.actions;
export default wishlistSlices.reducer;
