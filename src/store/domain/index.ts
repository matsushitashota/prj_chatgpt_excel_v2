import { combineReducers } from "@reduxjs/toolkit"

import { reducer as user } from "./user"

export const reducer = combineReducers({
  user
})
