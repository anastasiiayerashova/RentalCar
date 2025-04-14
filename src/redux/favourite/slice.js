import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: JSON.parse(localStorage.getItem('favourites')) || []
}

const slice = createSlice({
    name: 'favourites',
    initialState,
    selectors: {
        selectFavourites: state => state.items
    },
    reducers: {
        toggleFavourite: (state, { payload }) => {
            const car = payload
            const exists = state.items.find(item => item.id === car.id)

            if (exists) {
                state.items = state.items.filter(item => item.id !== car.id)
            }
            else {
                state.items.push(car)
            }

            localStorage.setItem('favourites', JSON.stringify(state.items))
        },

        removeFavourite: (state, { payload }) => {
            state.items = state.items.filter(item => item.id !== payload)
            localStorage.setItem('favourites', JSON.stringify(state.items))
        }
    }
})

export const {selectFavourites} = slice.selectors
export const { toggleFavourite, removeFavourite } = slice.actions
export const favouritesReducer = slice.reducer