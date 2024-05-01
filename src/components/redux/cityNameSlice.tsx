import { createSlice } from "@reduxjs/toolkit";

const clouldName = localStorage.getItem("cityName");
const currentCloudName = clouldName ? JSON.parse(clouldName) : undefined;

interface Prop {
  currentName: string | undefined;
}

const initialState: Prop = {
  currentName: currentCloudName,
};

const setNameSlice = createSlice({
  name: "setName",
  initialState,
  reducers: {
    setName(state, action) {
      state.currentName = action.payload;
    },
  },
});

export const { setName } = setNameSlice.actions;
export const setCurrentName = (state: { setCurrentName: Prop }) =>
  state.setCurrentName.currentName;
export const setNameReducer = setNameSlice.reducer;
