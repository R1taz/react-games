import { configureStore } from '@reduxjs/toolkit'
import gamesApi from '../api/gamesApi'
import gamesSlice from './slice/gamesSlice'

const store = configureStore({
	reducer: {
		gamesSlice,
		[gamesApi.reducerPath]: gamesApi.reducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat([gamesApi.middleware]),
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
