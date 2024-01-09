
import { configureStore } from '@reduxjs/toolkit';

import { apiSlice } from './api/apiSlice';
import counterSlice from './features/counter/counterSlice';

export const store = configureStore({
    reducer: {
        counter: counterSlice,
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

