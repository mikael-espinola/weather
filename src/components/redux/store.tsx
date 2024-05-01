import { configureStore } from "@reduxjs/toolkit";
import { setNameReducer } from "./cityNameSlice";
import { apiSliceReducer } from "./setDataslice";

const store = configureStore({
  reducer: {
    setCurrentName: setNameReducer,
    apiData: apiSliceReducer,
  },
});

export default store;
