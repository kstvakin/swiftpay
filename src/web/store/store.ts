import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import signUpReducer from "../features/SignUp/signUpSlice";

const persistConfig = {
  key: "root",
  storage,
};


const persistedSignUpReducer = persistReducer(persistConfig, signUpReducer);


export const store = configureStore({
  reducer: {
    signup: persistedSignUpReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});


export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
