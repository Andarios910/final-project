import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import request from "../../../app/apiConfig";


export const fetchUser = createAsyncThunk(
    'user/fetchUser',
    async(id) => {
        try {
            const req = await axios.get(`${request.baseUrl}/users/get/${id}`)
            return req.data.data
        }catch(error) {
            console.error(error);
        }
    }
)

// export const updateProfile = createAsyncThunk(
//     'user/updateProfile',
//     async({string}) => {
//         try {
//             const req = await axios.put(`${request.baseUrl}/users/update/?id=${id}`, {
//                 email : formValues.email,
//                 password  : formValues.password,
//             })
//             return req.data.data
//         }catch(error) {
//             console.error(error);
//         }
//     }
// )

export const updateUser = createAsyncThunk(
    'user/updateUser',
    async({formValues, id}) => {
        try {
            const req = await axios.put(`${request.baseUrl}/users/update/?id=${id}`, {
                email : formValues.email,
                password  : formValues.password,
            })
            return req.data.data
        }catch(error) {
            console.error(error);
        }
    }
)

const initialState = {
    data: [],
    dataUser: [],
    isLoading: false,
    hasError: false,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: {
        [updateUser.pending]: (state) => {
            state.isLoading = true
            state.hasError = false
        },
        [updateUser.fulfilled]: (state, {payload}) => {
            state.data = payload
            state.isLoading = false
            state.hasError = false
        },
        [updateUser.rejected]: (state) => {
            state.isLoading = false
            state.hasError = true
        },
        [fetchUser.pending]: (state) => {
            state.isLoading = true
            state.hasError = false
        },
        [fetchUser.fulfilled]: (state, {payload}) => {
            state.dataUser = payload
            state.isLoading = false
            state.hasError = false
        },
        [fetchUser.rejected]: (state) => {
            state.isLoading = false
            state.hasError = true
        },
    }
})

export default userSlice.reducer;