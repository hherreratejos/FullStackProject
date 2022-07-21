import { combineReducers } from "redux";

import usersReducer from "./user_reducer";
import listingsReducer from "./listings_reducers";
import bookingReducer from "./bookings_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  listings: listingsReducer,
  bookings : bookingReducer
});

export default entitiesReducer;