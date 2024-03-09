import { configureStore } from "@reduxjs/toolkit";
import User_Data from "./slices/User_Data";

const store = configureStore({
    reducer:{
      user_data : User_Data ,
    }
})

export {store}