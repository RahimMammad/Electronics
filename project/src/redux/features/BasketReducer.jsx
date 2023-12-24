import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    basket: []
}

const BasketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        addToBasket: (state, action) => {
            const basketIndex = state.basket.findIndex((x) => x.id === action.payload.id);
            basketIndex === -1 ?
                state.basket.push({...action.payload, count: 1}) : 
                    state.basket[basketIndex].count += 1
        },

        removeFromBasket: (state, action) => {
            state.basket = state.basket.filter((x) => x.id !== action.payload);
        },
    },
})

export const { addToBasket, removeFromBasket } = BasketSlice.actions
export default BasketSlice.reducer