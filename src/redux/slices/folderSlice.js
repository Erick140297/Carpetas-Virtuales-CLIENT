import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  folders: [],
  folder: {},
  subFolderState:false,
  folderId: "",
  stack: [],
};

export const folderSlice = createSlice({
  name: "folders",
  initialState,
  reducers: {
    setFolders: (state, action) => {
      const folders = action.payload;
      state.folders = folders;
    },
    clearFolders: (state) => {
      state.folders = [];
    },
    setFolder: (state, action) => {
      const folder = action.payload;
      state.folder = folder;
    },
    clearFolder: (state) => {
      state.folder = {};
    },
    clearFolderState: (state) => {
      state.folders = [];
      state.folder = {};
      state.subFolderState = false,
      state.folderId = "",
      state.stack = []
    },
    changeSubFolderState: (state, action) => {
      state.subFolder = action.payload
    },
    setFolderId: (state, action) => {
      const folderId = action.payload;
      state.folderId = folderId
    },
    pushStack: (state, action) => {
      state.stack.push(action.payload)
    },

    popStack: (state) => {
      state.lastId = state.stack.pop()
    }
  },
});

export const {
  setFolders,
  clearFolders,
  setFolder,
  clearFolder,
  clearFolderState,
  changeSubFolderState,
  setFolderId,
  pushStack,
  popStack
} = folderSlice.actions;

export default folderSlice.reducer;
