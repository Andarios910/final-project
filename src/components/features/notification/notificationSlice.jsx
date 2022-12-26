import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import request from "../../../app/apiConfig";


export const fetchNotification = createAsyncThunk(
    'notification/fetchNotification',
    async(id) => {
        try {
            const req = await axios.get(`${request.baseUrl}/notification/getall?id=${id}`)
            return req.data.data
        }catch(error) {
            console.error(error);
        }
    }
)

const initialState = {
    notification: [],
    isLoading: false,
    hasError: false,
}

export const notificationSlice = createSlice({
    name: 'login',
    initialState,
    extraReducers: {
        [fetchNotification.pending]: (state) => {
            state.isLoading = true
            state.hasError = false
        },
        [fetchNotification.fulfilled]: (state, {payload}) => {
            state.notification = payload
            state.isLoading = false
            state.hasError = false
        },
        [fetchNotification.rejected]: (state) => {
            state.isLoading = false
            state.hasError = true
        },
    }
})

export default notificationSlice.reducer;