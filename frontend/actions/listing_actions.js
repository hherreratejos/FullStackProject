import * as APIUtil from '../util/listing_api_util';

export const RECEIVE_LISTINGS = 'RECEIVE_LISTINGS';
export const RECEIVE_LISTING = 'RECEIVE_LISTING';

export const receiveListings = listings => {
  return{
  type: RECEIVE_LISTINGS,
  listings
  }
}

export const receiveListing = listings => ({
  type: RECEIVE_LISTING,
  listings
})

export const fetchListings = () => dispatch => {
  return APIUtil.fetchListings().then(listings => (
    dispatch(receiveListings(listings))
 ))
};