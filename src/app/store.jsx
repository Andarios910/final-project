import { configureStore } from "@reduxjs/toolkit";
// import moviesReducer from "../features/movies/moviesSlice";
// import creditReducer from "../features/movies/creditSlice";
// import reviewReducer from "../features/movies/reviewSlice";
// import videoReducer from "../features/movies/videoSlice";
// import genreReducer from "../features/movies/genreSlice";
// import searchReducer from "../features/movies/searchSlice";
// import loginReducer from "../features/login/loginSlice";
// import registerReducer from "../features/login/registerSlice";
import loginReducer from "../components/features/login/loginSlice";
import registerReducer from "../components/features/login/registerSlice";

export const store = configureStore({
    reducer: {
        login: loginReducer,
        register: registerReducer
    },
})