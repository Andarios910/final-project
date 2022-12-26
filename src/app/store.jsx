import { configureStore } from "@reduxjs/toolkit";
// import moviesReducer from "../features/movies/moviesSlice";
// import creditReducer from "../features/movies/creditSlice";
// import reviewReducer from "../features/movies/reviewSlice";
import loginReducer from "../components/features/login/loginSlice";
import registerReducer from "../components/features/login/registerSlice";
import airportReducer from "../components/features/airport/airportSlice";
import scheduleReducer from "../components/features/schedule/scheduleSlice";
import notificationReducer from "../components/features/notification/notificationSlice";
import cityReducer from "../components/features/airport/citySlice";
import searchReducer from "../components/features/search/searchSlice";
import historyReducer from "../components/features/history/historySlice";

export const store = configureStore({
    reducer: {
        login: loginReducer,
        register: registerReducer,
        airport: airportReducer,
        schedule: scheduleReducer,
        notification: notificationReducer,
        city: cityReducer,
        search: searchReducer,
        history: historyReducer,
    },
})