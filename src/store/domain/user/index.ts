import * as types from "./types"
import { createSelector, createSlice } from "@reduxjs/toolkit"
import { AllState } from "../.."

export const initialAuthState = []

const initialState: types.UserState = {
  userName: ""
}

const setAuthTemporaryEmail: types.SetUserState = (state, { payload }) =>
  (state = {
    userName: payload.userName
  })

export const { actions, reducer } = createSlice({
  name: "app/auth",
  initialState,
  reducers: {
    setAuthTemporaryEmail
  }
})

const rootSelector = (state: AllState): types.UserState => state.domain.user

export const authStateSelector = createSelector(rootSelector, (state) => state)
export const authTemporaryEmailSelector = createSelector(rootSelector, (state) => state.userName)
