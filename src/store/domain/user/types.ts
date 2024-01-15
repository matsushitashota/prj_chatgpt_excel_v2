import { CaseReducer, PayloadAction } from "@reduxjs/toolkit"

export type UserState = {
  uid: string
  userName: string
}

export type SetUserState = CaseReducer<UserState, PayloadAction<UserState>>
export type SetUserName = CaseReducer<UserState, PayloadAction<{ userName: string }>>
export type SetUid = CaseReducer<UserState, PayloadAction<{ uid: string }>>
