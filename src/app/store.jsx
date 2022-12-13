import { configureStore } from "@reduxjs/toolkit";
// import moviesReducer from "../features/movies/moviesSlice";
// import creditReducer from "../features/movies/creditSlice";
// import reviewReducer from "../features/movies/reviewSlice";
import loginReducer from "../components/features/login/loginSlice";
import registerReducer from "../components/features/login/registerSlice";
import airportReducer from "../components/features/airport/airportSlice";

export const store = configureStore({
    reducer: {
        login: loginReducer,
        register: registerReducer,
        airport: airportReducer
    },
})