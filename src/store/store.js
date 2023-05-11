import { configureStore } from "@reduxjs/toolkit";
import xyz from "./slices/cartSlice";
import abc from "./slices/wishlistslices";

const store = configureStore({
  reducer: {
    cart: xyz,
    Wishlist: abc,
  },
});

export default store;
