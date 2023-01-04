import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import request from "../../../app/apiConfig";
import Swal from 'sweetalert2'


export const handleLogin = createAsyncThunk(
    'login/handleLogin',
    async(formValues) => {
        try {
            const req = await axios.post(`${request.baseUrl}/auth/login`, {
                email: formValues.email,
                password: formValues.password
            })
            localStorage.setItem('token', JSON.stringify(req.data.data.access_token))
            localStorage.setItem('user', JSON.stringify(req.data.data.data))
            // setTimeout(() => {
            //     window.location.reload(1)
            // }, 1500)
        }catch(error) {
            // console.error(error);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Email atau Password Salah!',
                confirmButtonColor: '#8CD4F5'
            });
        }
    }
)

const initialState = {
    logInWithEmailAndPassword: [],
    signInWithGoogle: [],
    isLoading: false,
    hasError: false,
}

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    extraReducers: {
        [handleLogin.pending]: (state) => {
            state.isLoading = true
            state.hasError = false
        },
        [handleLogin.fulfilled]: (state, {payload}) => {
            state.logInWithEmailAndPassword = payload
            state.isLoading = false
            state.hasError = false
        },
        [handleLogin.rejected]: (state) => {
            state.isLoading = false
            state.hasError = true
        },
    }
})

export default loginSlice.reducer;