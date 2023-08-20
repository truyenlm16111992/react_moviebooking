import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    list: []
}
const movieBookingSlice = createSlice({
    name: "movieBooking",
    initialState,
    reducers: {

    },
});
export const { reducer: movieBookingReducer, actions: movieBookingActions } = movieBookingSlice;
