export const fetchGuestBookings = guestId => {
  return(
    $.ajax({
      method: 'GET',
      url: `/api/users/${guestId}/bookings`
    })
  )
}

export const fetchBooking = bookingId => {
  return (
    $.ajax({
      method: 'GET',
      url: `/api/bookings/${bookingId}`
    })
  )
}

export const createBooking = booking => {
  return(
    $.ajax({
      method: 'POST',
      url: `/api/bookings`,
      data: {booking}
    })
  )
}

export const updateBooking = booking => {
  return(
    $.ajax({
      method: 'PATCH',
      url: `/api/bookings/${booking.id}`,
      booking
    })
  )
}

export const destroyBooking = bookingId => {
  return ({
    method: 'DELETE',
    url: `/api/bookings/${bookingId}`
  })
}