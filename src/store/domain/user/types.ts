import { CaseReducer, PayloadAction } from "@reduxjs/toolkit"

export type UserState = {
  uid: string
  userName: string
}

export type SetUserState = CaseReducer<UserState, PayloadAction<UserState>>
