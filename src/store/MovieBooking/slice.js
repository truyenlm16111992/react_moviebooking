import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    info: {
        name: "",
        amount: 1
    },
    bookingList: [],
    bookedList: []
}
const movieBookingSlice = createSlice({
    name: "movieBooking",
    initialState,
    reducers: {
        updateInfo: (state, { payload }) => {
            if (payload)
                state.info = {...payload};
            else
                state.info = {...initialState.info};
        },
        changeNumberChairs: (state, { payload }) => {
            state.info.amount = state.info.amount + payload || 1;
        },
        addToBookingList: (state, { payload }) => {
            const { bookingList } = state;
            const index = bookingList.findIndex(item => item.soGhe === payload.soGhe);
            if (index === -1)
                state.bookingList.push(payload);
            else
                state.bookingList.splice(index, 1);
        },
    },
});
export const { reducer: movieBookingReducer, actions: movieBookingActions } = movieBookingSlice;
