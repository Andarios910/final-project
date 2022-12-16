import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import request from "../../../app/apiConfig";


export const fetchSchedule = createAsyncThunk(
    'schedule/fetchSchedule',
    async() => {
        try {
            const res = await axios.get(`${request.baseUrl}/schedule/get/all`)
            console.log(res)
        }catch(error) {
            console.error(error);
        }
    }
)

const initialState = {
    schedule: [],
    isLoading: false,
    hasError: false,
}

export const scheduleSlice = createSlice({
    name: 'schedule',
    initialState,
    extraReducers: {
        [fetchSchedule.pending]: (state) => {
            state.isLoading = true
            state.hasError = false
        },
        [fetchSchedule.fulfilled]: (state, {payload}) => {
            state.schedule = payload
            state.isLoading = false
            state.hasError = false
        },
        [fetchSchedule.rejected]: (state) => {
            state.isLoading = false
            state.hasError = true
        },
    }
})

export default scheduleSlice.reducer;