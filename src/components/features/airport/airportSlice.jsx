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
    // departure: '',
    // arrival: '',
    // departureDate: '',
    // passenger: 1,
    // class: 'Ekonomi',
    isLoading: false,
    hasError: false,
}

export const airportSlice = createSlice({
    name: 'airport',
    initialState,
    reducers: {
        // setDeparture(state, action) {
        //     state.status = 'success';
        //     state.departure = action.payload;
        // },
        // setArrival(state, action) {
        //     state.status = 'success';
        //     state.arrival = action.payload;
        // },
        // setDepartureDate(state, action) {
        //     state.status = 'success';
        //     state.departureDate = action.payload;
        // },
        // setPassenger(state, action) {
        //     state.status = 'success';
        //     state.passenger = action.payload;
        // },
        // setClass(state, action) {
        //     state.status = 'success';
        //     state.class = action.payload;
        // }
    },
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

// export const getDeparture = (state) => state.airport.departure;
// export const getArrival = (state) => state.airport.arrival;
// export const getPassenger = (state) => state.airport.passenger;
// export const getDepartureDate = (state) => state.airport.departureDate;
// export const getClass = (state) => state.s
export const {
    setDeparture,
    setArrival,
    setPassenger,
    setDepartureDate,
    setClass,
} = airportSlice.actions;

export default airportSlice.reducer;