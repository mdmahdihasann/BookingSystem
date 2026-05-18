
import { configureStore } from "@reduxjs/toolkit";
import tableReducer from "@/redux/features/lounchtable/lounchTable"
import bookingDetailsReducer from "@/redux/features/bookingDetails/bookingDetails"

export const store = configureStore({
    reducer:{
        lounchtable: tableReducer,
        bookingDetails: bookingDetailsReducer
    }
})