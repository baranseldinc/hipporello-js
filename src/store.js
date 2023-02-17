import { configureStore } from "@reduxjs/toolkit";
import { pageSlice } from "./pages/slice";

export const store = configureStore({
  reducer: {
    page: pageSlice.reducer,
  },
});
