import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from './reducers/UserReducer/UserSlice';
import signupReducer from './reducers/SignupReducer/SignupSlice';

const rootReducer = combineReducers({
  userReducer,
  signupReducer,
});

export const  setupStore = () => {
  return configureStore({
    reducer: rootReducer
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
