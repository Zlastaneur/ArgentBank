import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    lastName: "",
    firstName: "",
    token: "",
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        initInfo: (state, action) => {
            state.lastName = action.payload.lastName
            state.firstName = action.payload.firstName
            state.token = action.payload.token
        },
        updateInfo: (state, action) => {
            state.lastName = action.payload.lastName
            state.firstName = action.payload.firstName
        },
    },
})

export const { initInfo, updateInfo } = userSlice.actions
/*
export const selectUser=()=>{
}*/

export default userSlice.reducer