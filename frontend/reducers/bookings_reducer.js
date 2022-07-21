import {
  RECEIVE_BOOKING,
  RECEIVE_BOOKINGS,
  REMOVE_BOOKING
} from '../actions/booking_actions'

const bookingReducer = (state = {}, action) => {
  Object.freeze(state);
  const nextState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_BOOKINGS:
      return action.bookings;      
    case RECEIVE_BOOKING:
      nextState[action.booking.id] = action.booking;
      return nextState;
    case REMOVE_BOOKING:
      delete nextState[action.bookingId];
      return nextState;
    default:
      return state;
  }
}

export default bookingReducer