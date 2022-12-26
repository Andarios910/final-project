import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import request from "../../../app/apiConfig";

export const fetchCity = createAsyncThunk(
    'city/fetchCity',
    async() => {
        try {
            const res = await axios.get(`${request.baseUrl}/city/get/all`)
            return res.data.data;
        }catch(error) {
            console.error(error);
        }
    }
)

const initialState = {
    data: [],
    isLoading: false,
    hasError: false,
}

export const citySlice = createSlice({
    name: 'airport',
    initialState,
    extraReducers: {
        [fetchCity.pending]: (state) => {
            state.isLoading = true
            state.hasError = false
        },
        [fetchCity.fulfilled]: (state, {payload}) => {
            state.data = payload
            state.isLoading = false
            state.hasError = false
        },
        [fetchCity.rejected]: (state) => {
            state.isLoading = false
            state.hasError = true
        },
    }
})

export default citySlice.reducer;