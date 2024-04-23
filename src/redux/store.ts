import { configureStore } from "@reduxjs/toolkit";
import { answerReducer } from "./slices/answersSlice";
import { REDUX, getInitialData } from "./initialState";

export const store = configureStore({
  reducer: answerReducer,
  preloadedState: getInitialData(),
});

store.subscribe(() => {
  localStorage.setItem(REDUX, JSON.stringify(store.getState()));
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
