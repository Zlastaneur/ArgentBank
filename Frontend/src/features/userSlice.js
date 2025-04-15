import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    lastName: "",
    firstName: "",
    token: "",
    isLoggedIn: false,
    rememberEmail: false,
    savedEmail: "",
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserInfo: (state, action) => {
            state.lastName = action.payload.lastName
            state.firstName = action.payload.firstName
            state.token = action.payload.token
        },
        updateUserInfo: (state, action) => {
            state.lastName = action.payload.lastName
            state.firstName = action.payload.firstName
        },
        setLoginStatus: (state, action) => {
            state.isLoggedIn = action.payload.isLoggedIn
        },
        toggleRememberEmail: (state, action) => {
            state.rememberEmail = action.payload.rememberEmail
            state.savedEmail = action.payload.rememberEmail ? action.payload.email : ""
        }
    },
})

export const { setUserInfo, updateUserInfo, setLoginStatus, toggleRememberEmail } = userSlice.actions

export default userSlice.reducer