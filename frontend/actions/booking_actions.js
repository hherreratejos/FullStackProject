import * as APIUtil from '../util/booking_api_util';

export const RECEIVE_BOOKINGS = 'RECEIVE_BOOKINGS';
export const RECEIVE_BOOKING ='RECEIVE_BOOKING';
export const REMOVE_BOOKING = 'REMOVE_BOOKING';
export const RECEIVE_BOOKING_ERRORS = 'RECEIVE_BOOKING_ERRORS'

export const receiveBookings = bookings => {
  return{
    type: RECEIVE_BOOKINGS,
    bookings
  }
}

export const receiveBooking = booking => {
  return{
    type: RECEIVE_BOOKING,
    booking
  }
}

export const removeBooking = bookingId => {
  return{
    type: REMOVE_BOOKING,
    bookingId
  }
}

export const receiveBookingErrors = errors =>{
  return{
    type: RECEIVE_BOOKING_ERRORS,
    errors
  }
}

export const fetchBookings = id => dispatch => {
  APIUtil.fetchGuestBookings(id).then(bookings => dispatch(receiveBookings(bookings)))
}

export const fetchBooking = id => dispatch => {
  APIUtil.fetchBooking(id).then(booking => dispatch(receiveBooking(booking)))
}

export const createBooking = booking => dispatch =>{
  return(
    APIUtil.createBooking(booking).then(booking => (
      dispatch(receiveBooking(booking))
      ), error => (
        dispatch(receiveBookingErrors(error.responseJSON)))
      )
  )
}

export const updateBooking = booking => dispatch =>{
  return(
  APIUtil.updateBooking(booking).then(booking => dispatch(receiveBooking(booking)))
  )
}

export const destroyBooking = id => dispatch =>{
  return(
  APIUtil.destroyBooking(id).then( res => dispatch(removeBooking(id)))
  )
}