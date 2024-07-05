import { configureStore }  from  '@reduxjs/toolkit';
import carReducer from "../features/car/navSlice"


export const store = configureStore({
    reducer: {
        car: carReducer,
    },
});

