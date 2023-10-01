import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  files: [],
  file: {},
  fileId: "",
  stack: [],
  lastId: "",
};

export const fileSlice = createSlice({
  name: "files",
  initialState,
  reducers: {
    setFiles: (state, action) => {
      const files = action.payload;
      state.files = files;
    },
    clearFiles: (state) => {
      state.files = [];
    },
    setFile: (state, action) => {
      const file = action.payload;
      state.file = file;
    },
    clearFile: (state) => {
      state.file = {};
    },
    clearFileState: (state) => {
      (state.files = []),
        (state.file = {}),
        (state.fileId = ""),
        (state.stack = []),
        (state.lastId = "");
    },
    setFileId: (state, action) => {
      const fileId = action.payload;
      state.fileId = fileId;
    },
    pushStack: (state, action) => {
      state.stack.push(action.payload);
    },

    popStack: (state) => {
      state.lastId = state.stack.pop();
    },
  },
});

export const {
  setFiles,
  clearFiles,
  setFile,
  clearFile,
  clearFileState,
  setFileId,
  pushStack,
  popStack,
} = fileSlice.actions;

export default fileSlice.reducer;
