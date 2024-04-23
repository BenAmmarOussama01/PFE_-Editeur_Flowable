import {configureStore} from "@reduxjs/toolkit"
import ProcessReducer from "./processSlice"
export const store=configureStore({
      reducer:{
            process:ProcessReducer
      }
});
export type RootState=ReturnType<typeof store.getState>;
export type AppDispatch=typeof store.dispatch;