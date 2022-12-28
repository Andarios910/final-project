import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import request from "../../../app/apiConfig";


export const handleTransaksi = createAsyncThunk(
    'transaksi/handleTransaksi',
    async(data) => {
        try {
            const req = await axios.post(`${request.baseUrl}/booking/create`, {
                scheduleId : data.scheduleId,
                userId  : data.userId,
                passengerRequests : data.passengerRequests
            })
            return req.data.data
        }catch(error) {
            console.error(error);
        }
    }
)

const initialState = {
    transaksi: [],
    isLoading: false,
    hasError: false,
}

export const transaksiSlice = createSlice({
    name: 'transaksi',
    initialState,
    extraReducers: {
        [handleTransaksi.pending]: (state) => {
            state.isLoading = true
            state.hasError = false
        },
        [handleTransaksi.fulfilled]: (state, {payload}) => {
            state.transaksi = payload
            state.isLoading = false
            state.hasError = false
        },
        [handleTransaksi.rejected]: (state) => {
            state.isLoading = false
            state.hasError = true
        },
    }
})

export default transaksiSlice.reducer;