import { api } from "../axios.config.js";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getCars = createAsyncThunk(
    'getCars',
    async (params = {}, thunkAPI) => {
        try {
            const state = thunkAPI.getState()
            const currentPage = state.cars.currentPage

            const { brand, price, mileageFrom, mileageTo } = params
            
            const queryParams = {
                ...(brand && { brand }),
                ...(price && { rentalPrice: price }),
                ...(mileageFrom && { minMileage: mileageFrom }),
                ...(mileageTo && { maxMileage: mileageTo }),
                page: currentPage
            }

            const { data } = await api.get('/cars', { params: queryParams })
            
            return data
        }
        catch (e) {
            return thunkAPI.rejectWithValue(e.message)
        }
    })