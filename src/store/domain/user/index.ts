import * as types from "./types"
import { createSelector, createSlice } from "@reduxjs/toolkit"
import { AllState } from "../.."

export const initialAuthState = []

const initialState: types.UserState = {
  uid: "",
  userName: ""
}

const setUid: types.SetUserState = (state, { payload }) =>
  (state = {
    uid: payload.uid,
    userName: state.userName
  })

const setUserName: types.SetUserState = (state, { payload }) =>
  (state = {
    uid: state.uid,
    userName: payload.userName
  })

export const { actions, reducer } = createSlice({
  name: "app/auth",
  initialState,
  reducers: {
    setUid,
    setUserName
  }
})

const rootSelector = (state: AllState): types.UserState => state.domain.user

export const userStateSelector = createSelector(rootSelector, (state) => state)
export const uidSelector = createSelector(rootSelector, (state) => state.uid)
export const userNameSelector = createSelector(rootSelector, (state) => state.userName)
