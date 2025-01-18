import { combineReducers } from "@reduxjs/toolkit";
import BookTicketReducer from "../reducer/TicketRedux";
const rootReducer = combineReducers({
  BookTicketReducer,
});

export default rootReducer;
