import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import request from "../../../app/apiConfig";

export const fetchBookingById = createAsyncThunk(
    'payment/fetchBookingById',
    async(id) => {
        try {
            const res = await axios.get(`${request.baseUrl}/booking/history?bookingId=${id}`)
            console.log(res)
            return res.data.data
        } catch (error) {
            console.error(error)
        }
    }
)

const initialState = {
    data: [],
    isLoading: false,
    hasError: false,
}

export const paymentHistorySlice = createSlice({
    name: 'paymentHistory',
    initialState,
    extraReducers: {
        [fetchBookingById.pending]: (state) => {
            state.isLoading = true
            state.hasError = false
        },
        [fetchBookingById.fulfilled]: (state, {payload}) => {
            state.data = payload
            state.isLoading = false
            state.hasError = false
        },
        [fetchBookingById.rejected]: (state) => {
            state.isLoading = false
            state.hasError = true
        },
    }
})

export default paymentHistorySlice.reducer;