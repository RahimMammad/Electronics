import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    wishlist: []
}

const WishlistSlice = createSlice({
    name: "wishlist",
    initialState,
    reducers: {
        addToWishlist: (state, action) => {
            const wishlistIndex = state.wishlist.findIndex((x) => x.id === action.payload.id)
            if(wishlistIndex === -1) {
                state.wishlist.push({...action.payload})
            }
        },
        removeFromWishlist: (state, action) => {
            state.wishlist = state.wishlist.filter((x) => x.id !== action.payload)
        },
    },
});

export const { addToWishlist, removeFromWishlist } = WishlistSlice.actions
export default WishlistSlice.reducer