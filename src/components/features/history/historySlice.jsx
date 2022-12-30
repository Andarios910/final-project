import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import request from "../../../app/apiConfig";


export const fetchHistory = createAsyncThunk(
    'history/fetchHistory',
    async(id) => {
        try {
            const res = await axios.get(`${request.baseUrl}/booking/allhistory?userId=${id}`)
            return res.data.data
        }catch(error) {
            console.error(error);
        }
    }
)

const initialState = {
    history: [],
    isLoading: false,
    hasError: false,
}

export const historySlice = createSlice({
    name: 'history',
    initialState,
    extraReducers: {
        [fetchHistory.pending]: (state) => {
            state.isLoading = true
            state.hasError = false
        },
        [fetchHistory.fulfilled]: (state, {payload}) => {
            state.history = payload
            state.isLoading = false
            state.hasError = false
        },
        [fetchHistory.rejected]: (state) => {
            state.isLoading = false
            state.hasError = true
        },
    }
})

export default historySlice.reducer;