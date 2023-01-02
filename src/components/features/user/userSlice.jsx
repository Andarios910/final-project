import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import request from "../../../app/apiConfig";


export const updateUser = createAsyncThunk(
    'user/updateUser',
    async({ id, email, password}) => {
        try {
            const req = await axios.put(`${request.baseUrl}/users/update/?id=${id}`, {
                email : email,
                password  : password,
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
    }
})

export default userSlice.reducer;