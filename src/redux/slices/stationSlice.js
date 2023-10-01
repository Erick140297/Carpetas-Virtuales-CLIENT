import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  stations: [],
  stationsByZone: [],
  station: {},
  edit: false,
};

export const stationSlice = createSlice({
  name: "stations",
  initialState,
  reducers: {
    setStations: (state, action) => {
      const stations = action.payload;
      state.stations = stations;
    },
    setStationsByZone: (state, action) => {
      const stationsByZone = action.payload;
      state.stationsByZone = stationsByZone;
    },
    clearStations: (state) => {
      state.stations = [];
    },
    setStation: ( state, action) => {
      const station = action.payload;
      state.station = station;
      state.edit = true;
    },
    clearStation: (state) => {
      state.station = {};
      state.edit = false;
    },
    clearStationState: (state) => {
      state.stations = [];
      state.stationsByZone = [];
      state.station = {};
      state.edit = false;
    }
  },
});

export const { setStations, clearStations, setStation, clearStation, clearStationState, setStationsByZone } = stationSlice.actions;
export default stationSlice.reducer;
