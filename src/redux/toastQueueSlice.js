import { createSlice } from '@reduxjs/toolkit';

export const TOAST_TYPE = {
  SUCCESS: "success",
  WARNING: "warning",
  ERROR: "error",
};

let toastId = 0;

const toastQueueSlice = createSlice({
  name: 'notificationManager',
  initialState: [],
  reducers: {
    addToast: (state, actions) => {
      toastId += 1;
      state.push({...actions.payload, id: toastId});
    },
    removeToast: (state, actions) => state.filter((toast) => toast.id !== actions.payload),
  },
});

export const {
  addToast,
  removeToast
} = toastQueueSlice.actions;

export const toastQueueReducer = toastQueueSlice.reducer;
