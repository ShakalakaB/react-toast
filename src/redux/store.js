import { configureStore } from '@reduxjs/toolkit';
import { toastQueueReducer } from './toastQueueSlice';

export default configureStore({
  reducer: {
    toastQueue: toastQueueReducer
  }
});
