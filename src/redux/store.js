import { configureStore } from '@reduxjs/toolkit'
import authReducer from "./slices/authSlice"
import usersReducer from "./slices/usersSlice"
import stationsReducer from "./slices/stationSlice"
import foldersReducer from "./slices/folderSlice"
import filesReducer from "./slices/fileSlice"

export const store = configureStore({
  reducer: {
    auth: authReducer,
    users: usersReducer,
    stations: stationsReducer,
    folders: foldersReducer,
    files: filesReducer,
  },
})