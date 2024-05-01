import { createSlice } from "@reduxjs/toolkit";

interface Props {
  weatherData: {
    base: string;
    clouds: { all: number };
    cod: string;
    coord: { lat: number; lon: number };
    main: {
      feels_like: number;
      humidity: number;
      pressure: number;
      temp: number;
      temp_max: number;
      temp_min: number;
    };
    name: string;
    rain: { "1h": number };
    sys: {
      country: string;
      id: number;
      sunrise: number;
      sunset: number;
      type: number;
    };
    timezone: number;
    visibility: number;
    weather: {
      id: number;
      main: string;
      description: string;
      icon: string;
    }[];
    wind: { deg: number; speed: number };
  };
}
const initialState: Props = {
  weatherData: {
    base: "",
    clouds: { all: 0 },
    cod: "0",
    coord: { lat: 0, lon: 0 },
    main: {
      feels_like: 0,
      humidity: 0,
      pressure: 0,
      temp: 0,
      temp_max: 0,
      temp_min: 0,
    },
    name: "",
    rain: { "1h": 0 },
    sys: {
      country: "",
      id: 0,
      sunrise: 0,
      sunset: 0,
      type: 0,
    },
    timezone: 0,
    visibility: 0,
    weather: [
      {
        id: 0,
        main: "",
        description: "",
        icon: "",
      },
    ],
    wind: {
      deg: 0,
      speed: 0,
    },
  },
};

const setDataSlice = createSlice({
  name: "apiData",
  initialState,
  reducers: {
    getData(state, action) {
      return {
        ...state,
        weatherData: action.payload,
      };
    },
  },
});

export const { getData } = setDataSlice.actions;
export const apiData = (state: { apiData: Props }) => state.apiData.weatherData;
export const apiSliceReducer = setDataSlice.reducer;
