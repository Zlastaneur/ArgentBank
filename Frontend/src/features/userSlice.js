import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    name: "",
    firstname: "",
    token: "",
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        initInfo: (state, action) => {
            console.log(action.payload.firstname)

            state.name = action.payload.name
            state.firstname = action.payload.firstname
            state.token = action.payload.token
        },
        updateInfo: (state, action) => {
            state.name = action.payload.name
            state.firstname = action.payload.firstname
        },
    },
})

export const { initInfo, updateInfo } = userSlice.actions
/*
export const selectUser=()=>{
}*/

export default userSlice.reducer