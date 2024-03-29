import { combineReducers } from "redux";
import bookingErrorsReducer from './booking_errors_reducer'
import sessionErrorsReducer from "./session_errors_reducer";

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  booking: bookingErrorsReducer
});

export default errorsReducer;