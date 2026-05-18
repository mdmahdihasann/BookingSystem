import { createSlice } from "@reduxjs/toolkit";

const bookingDetails = createSlice({
  name: "bookingDetails",
  initialState: { data: {}, },
  reducers: {
    setBookingDetails: (state, action) => {
      state.data = action.payload;
    },
  },
});
export const { setBookingDetails } = bookingDetails.actions;
export default bookingDetails.reducer;
