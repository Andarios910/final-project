import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import request from "../../../app/apiConfig";

export const fetchAirPort = createAsyncThunk(
    'airport/fetchAirPort',
    async() => {
        try {
            const res = await axios.get(`${request.baseUrl}/airportDetail/get/all`)
            return res.data.data;
        }catch(error) {
            console.error(error);
        }
    }
)

const initialState = {
    airport: [],
    isLoading: false,
    hasError: false,
}

export const airportSlice = createSlice({
    name: 'airport',
    initialState,
    extraReducers: {
        [fetchAirPort.pending]: (state) => {
            state.isLoading = true
            state.hasError = false
        },
        [fetchAirPort.fulfilled]: (state, {payload}) => {
            state.airport = payload
            state.isLoading = false
            state.hasError = false
        },
        [fetchAirPort.rejected]: (state) => {
            state.isLoading = false
            state.hasError = true
        },
    }
})

export default airportSlice.reducer;