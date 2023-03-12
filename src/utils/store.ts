import { usersApi } from "@/api/users-api";
import { userUtilsSlice } from "@/store/slices/user-utils";
import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const createStore = () =>
	configureStore({
		reducer: {
			[userUtilsSlice.name]: userUtilsSlice.reducer,
			[usersApi.reducerPath]: usersApi.reducer
		},
		middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(usersApi.middleware),
		devTools: process.env.NODE_ENV !== "production"
	});

export type AppStore = ReturnType<typeof createStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

export const wrapper = createWrapper(createStore);

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
