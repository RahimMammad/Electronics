import { configureStore } from "@reduxjs/toolkit";
import BasketReducer from "./features/BasketReducer";
import WishlistReducer from "./features/WishlistReducer";

export const store = configureStore({
    reducer: {
        basket: BasketReducer,
        wishlist: WishlistReducer
    }
})