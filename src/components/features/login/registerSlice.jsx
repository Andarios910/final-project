import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const handleRegister = createAsyncThunk(
    'register/handleRegister',
    async(formValues) => {
        try {
            const req = await axios.post('https://eflightticketb2-staging.up.railway.app/auth/signup', {
                email: formValues.email,
                password: formValues.password,
                firstName: formValues.firstName,
                lastName: formValues.lastName
            })
            // localStorage.setItem('token', JSON.stringify(req.accessToken));
            // localStorage.setItem('user', JSON.stringify(req))
            console.log(req)
            // setTimeout(() => {
            //     window.location.reload(1)
            // }, 1500)
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