import {
  RECEIVE_LISTINGS,
  RECEIVE_LISTING
} from '../actions/listing_actions';

const listingsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_LISTINGS:
      return action.listings;
    case RECEIVE_LISTING:
      const newListing = { [action.listing.id]: action.listing};
      return Object.assign({}, state, newListing)
    default:
      return state;
  }
}

export default listingsReducer