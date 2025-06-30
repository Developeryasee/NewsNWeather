import { AnyAction, combineReducers, configureStore, ThunkDispatch } from "@reduxjs/toolkit";

import newsReducer from "./slices/newsSlices";
import { useDispatch } from "react-redux";

const appReducer = combineReducers({
    news: newsReducer
});
export const store = configureStore({
    reducer: appReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export type AppThunkDispatch = ThunkDispatch<RootState, any, AnyAction>;
export const useAppDispatch = () => useDispatch<AppThunkDispatch>();
export type RootState = ReturnType<typeof store.getState>;