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
            console.log(req)
            return req.data.data
        }catch(error) {
            console.error(error);
        }
    }
)

// export const handleUpdateUser = createAsyncThunk(
//     'updateUser/handleUpdateUser',
//     async(formValues) => {
//         try {
//             const req = await axios.post(`${request.baseUrl}/auth/login`, {
//                 email: formValues.email,
//                 password: formValues.password
//             })
//             localStorage.setItem('token', JSON.stringify(req.data.data.access_token))
//             localStorage.setItem('user', JSON.stringify(req.data.data.data))
//             // setTimeout(() => {
//             //     window.location.reload(1)
//             // }, 1500)
//         }catch(error) {
//             console.error(error);
//         }
//     }
// )

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