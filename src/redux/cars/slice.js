import { createSlice } from "@reduxjs/toolkit";
import { getCars } from "./operations.js";

const initialState = {
    items: [],
    loading: false,
    error: null,
    currentPage: 1,
    totalPages: 0
}

const slice = createSlice({
    name: 'cars',
    initialState,
    selectors: {
        selectCars: state => state.items,
        selectCurrentPage: state => state.currentPage,
        selectTotalPages: state => state.totalPages,
        selectLoading: state => state.loading
    },
    reducers: {
        setCurrentPage: (state) => {
            state.currentPage += 1
        },
        clearItems: (state) => {
            state.items = []
        },
        resetPage: (state) => {
            state.currentPage = 1
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getCars.pending, (state) => {
            state.loading = true
        })
            .addCase(getCars.fulfilled, (state, { payload }) => {
                state.loading = false
                state.error = null

                // const newCars = payload.cars.filter((car) => !state.items.some((existing) => existing.id === car.id))
                // state.items.push(...newCars)
                state.items = payload.cars
                state.totalPages = payload.totalPages
            })
            .addCase(getCars.rejected, (state, {payload}) => {
                state.loading = false
                state.error = payload
        })
    }
})

export const {selectCars, selectCurrentPage, selectTotalPages, selectLoading} = slice.selectors
export const { setCurrentPage, clearItems, resetPage } = slice.actions
export const carsReducer = slice.reducer