import { createSlice } from "@reduxjs/toolkit";
import { saveDashboardDetailsToLocalStorage } from "../../../core/helpers/storage";

export const dashboardDetailsSlice = createSlice({
  name: "dashboardDetails",
  initialState: {
    dashboardDetails: {
      selectOption: "",
      channelId: "",
    },
  },

  reducers: {
    AddDashboardDetails: (state, action) => {
      const { selectOption, channelId } = action.payload;
      state.dashboardDetails.selectOption = selectOption;
      state.dashboardDetails.channelId = channelId;
      saveDashboardDetailsToLocalStorage(state.dashboardDetails);
    },
  },
});

export default dashboardDetailsSlice.reducer;
export const { AddDashboardDetails } = dashboardDetailsSlice.actions;
