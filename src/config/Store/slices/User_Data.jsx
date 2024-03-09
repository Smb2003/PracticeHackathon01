import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoggedIn : false
}

const User_Data = createSlice({
    name: "user_data",
    initialState,
    reducers:{
        set_user_auth: (state, {payload})=>{
            state.isLoggedIn = payload
        }
    }

})

export default User_Data.reducer;
export const {set_user_auth} = User_Data.actions;
