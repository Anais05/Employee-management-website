import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import employeeSlice from "./employeeSlice"
import loginSlice from "./loginSlice";

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({ 
  login : loginSlice,
  employee: employeeSlice
})

const persistedReducer = persistReducer(persistConfig, rootReducer)


export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk]
})

export const persistor = persistStore(store)