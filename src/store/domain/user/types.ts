import { CaseReducer, PayloadAction } from "@reduxjs/toolkit"

export type UserState = {
  userName: string
}

export type SetUserState = CaseReducer<UserState, PayloadAction<UserState>>
