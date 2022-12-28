import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import request from "../../../app/apiConfig";


export const handlePayment = createAsyncThunk(
    'payment/handlePayment',
    async({id, payment}) => {
        try {
            const req = await axios.post(`${request.baseUrl}/booking/payment`, {
                bookingId : id,
                paymentMethod : payment,
            })
            return req.data.data
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

export const paymentSlice = createSlice({
    name: 'payment',
    initialState,
    extraReducers: {
        [handlePayment.pending]: (state) => {
            state.isLoading = true
            state.hasError = false
        },
        [handlePayment.fulfilled]: (state, {payload}) => {
            state.data = payload
            state.isLoading = false
            state.hasError = false
        },
        [handlePayment.rejected]: (state) => {
            state.isLoading = false
            state.hasError = true
        },
    }
})

export default paymentSlice.reducer;