import { createSlice } from "@reduxjs/toolkit";


const intitialState = {
    auth: false
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuth: (state, action)=>{
            return state.auth = action.payload
        }
    }
})

export default authSlice.reducer
export const { setAuth } = authSlice.actions