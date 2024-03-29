import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import request from "../../../app/apiConfig";


export const fetchSchedule = createAsyncThunk(
    'schedule/fetchSchedule',
    async() => {
        const token = JSON.parse(localStorage.getItem('token'))
        try {
            const res = await axios.get(`${request.baseUrl}/schedule/get/all`, {
                headers: {
                    'Authorization' : `Bearer ${token}`
                }
            }) 
            return res.data.data
        }catch(error) {
            console.error(error);
        }
    }
)

export const fetchScheduleById = createAsyncThunk(
    'schedule/fetchscheduleById',
    async(idTicket) => {
        try {
            const res = await axios.get(`${request.baseUrl}/schedule/get/${idTicket}`)
            return res.data.data;
        }catch(error) {
            console.error(error);
        }
    }
)

const initialState = {
    data: [],
    allData: [],
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
            state.allData = payload
            state.isLoading = false
            state.hasError = false
        },
        [fetchSchedule.rejected]: (state) => {
            state.isLoading = false
            state.hasError = true
        },
        [fetchScheduleById.pending]: (state) => {
            state.isLoading = true
            state.hasError = false
        },
        [fetchScheduleById.fulfilled]: (state, {payload}) => {
            state.data = payload
            state.isLoading = false
            state.hasError = false
        },
        [fetchScheduleById.rejected]: (state) => {
            state.isLoading = false
            state.hasError = true
        },
    }
})

export default scheduleSlice.reducer;