import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import request from "../../../app/apiConfig";

export const handleRegister = createAsyncThunk(
    'register/handleRegister',
    async(formValues) => {
        try {
            const req = await axios.post(`${request.baseUrl}/auth/signup`, {
                email: formValues.email,
                password: formValues.password,
                firstName: formValues.firstName,
                lastName: formValues.lastName
            })
            localStorage.setItem('token', JSON.stringify(req.data.data.access_token))
            localStorage.setItem('user', JSON.stringify(req.data.data.data))
        }catch(error) {
            console.error(error);
        }
    }
)

const initialState = {
    registerWithEmailAndPassword: [],
    isLoading: false,
    hasError: false,
}

export const registerSlice = createSlice({
    name: 'register',
    initialState,
    extraReducers: {
        [handleRegister.pending]: (state) => {
            state.isLoading = true
            state.hasError = false
        },
        [handleRegister.fulfilled]: (state, {payload}) => {
            state.isLoading = false
            state.hasError = false
        },
        [handleRegister.rejected]: (state) => {
            state.isLoading = false
            state.hasError = true
        }
    }
})

export default registerSlice.reducer;