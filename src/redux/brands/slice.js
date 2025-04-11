import { createSlice } from "@reduxjs/toolkit";
import { getCarBrands } from "./operations.js";

const initialState = {
    items: [],
    loading: false,
    error: null
}

const slice = createSlice({
    name: 'brands',
    initialState,
    selectors: {
        selectCarBrands: state => state.items
    },
    extraReducers: (builder) => {
        builder
            .addCase(getCarBrands.pending, (state) => {
                state.loading = true
            })
            .addCase(getCarBrands.fulfilled, (state, { payload }) => {
                state.items = payload
                state.loading = false
                state.error = null
            })
            .addCase(getCarBrands.rejected, (state, { payload }) => {
                state.loading = false
                state.error = true
        })
    }
})

export const { selectCarBrands } = slice.selectors
export const brandsReducer = slice.reducer