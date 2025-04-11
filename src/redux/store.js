import { configureStore } from "@reduxjs/toolkit";
import { carsReducer } from "./cars/slice.js";
import { filtersReducer } from "./filters/slice.js";
import { brandsReducer } from "./brands/slice.js";

export const store = configureStore({
    reducer: {
        cars: carsReducer,
        filters: filtersReducer,
        brands: brandsReducer
    }
})