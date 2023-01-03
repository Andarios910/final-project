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

export const updateProfile = createAsyncThunk(
    'user/updateProfile',
    async(formdata) => {
        try {
            const req = await axios.put(`${request.baseUrl}/users/upload`, formdata)
            return req.data.data
        }catch(error) {
            console.error(error);
        }
    }
)

export const updatePhoneNumber = createAsyncThunk(
    'user/updatePhoneNumber',
    async(formValues) => {
        const user = JSON.parse(localStorage.getItem('user'))
        try {
            const req = await axios.post(`${request.baseUrl}/users/phone?phone=${formValues.phone}&id=${user.id}`)
            return req.data.data
        }catch(error) {
            console.error(error);
        }
    }
)

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
    updateProfile: [],
    phone: [],
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
        [updateProfile.pending]: (state) => {
            state.isLoading = true
            state.hasError = false
        },
        [updateProfile.fulfilled]: (state, {payload}) => {
            state.updateProfile = payload
            state.isLoading = false
            state.hasError = false
        },
        [updateProfile.rejected]: (state) => {
            state.isLoading = false
            state.hasError = true
        },
        [updatePhoneNumber.pending]: (state) => {
            state.isLoading = true
            state.hasError = false
        },
        [updatePhoneNumber.fulfilled]: (state, {payload}) => {
            state.phone = payload
            state.isLoading = false
            state.hasError = false
        },
        [updatePhoneNumber.rejected]: (state) => {
            state.isLoading = false
            state.hasError = true
        },
    }
})

export default userSlice.reducer;