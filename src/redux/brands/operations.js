import { api } from "../axios.config.js";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getCarBrands = createAsyncThunk(
    'getCarBrands',
    async (_, thunkAPI) => {
        try {
            const { data } = await api.get('/brands')
            return data
        }
        catch (e) {
            return thunkAPI.rejectWithValue(e.message)
        }
    }
)