import { combineReducers } from "@reduxjs/toolkit";
import { movieBookingReducer } from "./MovieBooking/slice";

export const rootReducer = combineReducers({
    movieBookingRedux: movieBookingReducer,
});