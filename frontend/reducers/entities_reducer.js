import { combineReducers } from "redux";

import usersReducer from "./user_reducer";
import listingsReducer from "./listings_reducers";

const entitiesReducer = combineReducers({
  users: usersReducer,
  listings: listingsReducer
});

export default entitiesReducer;