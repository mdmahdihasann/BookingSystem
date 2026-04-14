
import { configureStore } from "@reduxjs/toolkit";
import tableReducer from "@/redux/features/lounchtable/lounchTable"

export const store = configureStore({
    reducer:{
        lounchtable: tableReducer,
    }
})