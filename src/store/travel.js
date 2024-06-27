import { createSlice, current } from "@reduxjs/toolkit";
import { initialData } from "../data/initialData";
import {
  purchaseOperation,
  selectDeselectOperation,
  updatePassengerDataOperation,
} from "../helper/operations";

export const userSlice = createSlice({
  name: "travel",
  initialState: { travels: initialData, selectedSeatData: [] },
  reducers: {
    purchase: (state, action) => {
      purchaseOperation(state, action);
      state.selectedSeatData = [];
    },
    addTravel: (state, action) => {
      let arr = state.travels;
      arr.push(action.payload.travel);
      state.travels = arr;
    },
    updatePassengerData: (state, action) => {
      state.selectedSeatData = updatePassengerDataOperation(state, action);
    },
    updatePassengerComponents: (state, action) => {
      state.selectedSeatData = [...action.payload.seats];
      selectDeselectOperation(state, action);
    },
    selectDeselect: (state, action) => {
      selectDeselectOperation(state, action);
    },
  },
});


export const {
  addTravel,
  purchase,
  updatePassengerData,
  selectDeselect,
  updatePassengerComponents,
} = userSlice.actions;
export default userSlice.reducer;
