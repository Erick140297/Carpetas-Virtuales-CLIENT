import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  authUser: {},
  isAuth: false,
};

export const userSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    getUser: (state, action) => {
      const { id, name, userName, post, zone, station } = action.payload;
      state.authUser.id = id;
      state.authUser.name = name;
      state.authUser.userName = userName;
      state.authUser.post = post;
      state.authUser.zone = zone;
      state.authUser.station = station;
    },
    loginUser: (state) => {
      state.isAuth = true;
    },
    logoutUser: (state) => {
      state.isAuth = false;
      state.authUser = {};
    }
  },
});

export const { getUser, loginUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;