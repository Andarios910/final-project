import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import request from "../../../app/apiConfig";
import { format } from 'date-fns';

// export const handleSearch = createAsyncThunk(
//     'search/handleSearch',
//     async({dep, arr, ddate, classF, page, size, sort}) => {
//         try {
//             const res = await axios.get(`${request.baseUrl}/schedule/get/all/search/default?&departure=${dep}&arrival=${arr}`,  
//             {
//                 params: {
//                     // departure: departure,
//                     // arrival: dataArrival,
//                     date: format(Date.parse(ddate), 'yyyy-MM-dd'),
//                     class: classF,
//                     page: page,
//                     size: size,
//                     sort: sort
//                 }
//             })
//             // console.log(res)
//             return res.data.data;
//         }catch(error) {
//             console.error(error);
//         }
//     }
// )

export const handleSearch = createAsyncThunk(
    'search/handleSearch',
    async({dep, arr, ddate, classF, page, size, sort, offset, sorting}) => {
        try {
            const res = await axios.get(`${request.baseUrl}/schedule/get/all/search/default?&departure=${dep}&arrival=${arr}`,  
            {
                params: {
                    // departure: departure,
                    // arrival: dataArrival,
                    date: format(Date.parse(ddate), 'yyyy-MM-dd'),
                    class: classF,
                    page: offset,
                    size: size,
                    sort: sorting
                }
            })
            console.log(res)
            return res.data.data
        }catch(error) {
            console.error(error);
        }
    }
)

const initialState = {
    search: [],
    isLoading: false,
    hasError: false,
}

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    extraReducers: {
        [handleSearch.pending]: (state) => {
            state.isLoading = true
            state.hasError = false
        },
        [handleSearch.fulfilled]: (state, {payload}) => {
            state.search = payload
            state.isLoading = false
            state.hasError = false
        },
        [handleSearch.rejected]: (state) => {
            state.isLoading = false
            state.hasError = true
        },
    }
})

export default searchSlice.reducer;