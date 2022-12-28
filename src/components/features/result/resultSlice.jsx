import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import request from "../../../app/apiConfig";

export const fetchQrCode = createAsyncThunk(
    'result/fetchQrCode',
    async(idTicket) => {
        try {
            const res = await axios.get(`${request.baseUrl}/invoice/showQRCode?bookingId=${idTicket}`)
            return res.data;
        }catch(error) {
            console.error(error);
        }
    }
)

const initialState = {
    result: [],
    isLoading: false,
    hasError: false,
}

export const resultSlice = createSlice({
    name: 'result',
    initialState,
    extraReducers: {
        [fetchQrCode.pending]: (state) => {
            state.isLoading = true
            state.hasError = false
        },
        [fetchQrCode.fulfilled]: (state, {payload}) => {
            state.result = payload
            state.isLoading = false
            state.hasError = false
        },
        [fetchQrCode.rejected]: (state) => {
            state.isLoading = false
            state.hasError = true
        },
    }
})

export default resultSlice.reducer;