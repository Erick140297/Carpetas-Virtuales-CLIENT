import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  edit: false,
  user: {},
  supervisores:[],
  gerente: true,
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers: (state, action) => {
      const users = action.payload;
      state.users = users;
    },
    setSupervisores: (state, action) => {
      const supervisores = action.payload;
      state.supervisores = supervisores;
    },
    clearUsers: (state) => {
      state.users = [];
    },
    setUser: (state, action) => {
      const user = action.payload;
      state.user = user;
      state.edit = true;
    },
    setGerente: (state, action) => {
      state.gerente = action.payload
    },
    clearUser: (state) => {
      state.user = {};
      state.edit = false;
    },
    clearUserState: (state) => {
      state.users = [];
      state.user = {};
      state.edit = false;
      state.supervisores = [];
      state.gerente = true;
    },
  }});

export const { setUsers, clearUsers, setUser, clearUser, setSupervisores, clearUserState, setGerente } = userSlice.actions;
export default userSlice.reducer;
