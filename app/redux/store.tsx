import { configureStore } from '@reduxjs/toolkit';
import mockReducer from '@/app/redux/features/mockSlice';
// import { mockAPI } from '@/app/redux/features/mockApi';

export const store = configureStore({
  reducer: {
    mockReducer,
    // [mockAPI.reducerPath]: mockAPI.reducer,
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(mockAPI.middleware),
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
