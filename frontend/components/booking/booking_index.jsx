import React from 'react';
import BookingIndexItem from './booking_index_item'

class BookingIndex extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.fetchBookings(this.props.currentUserId)

  }

  bookingMap(){
    return(
      <div>
    {this.props.bookings.map(booking =>(
      <BookingIndexItem
      booking={booking}
      key={booking.id}
      />
      
    ))}
    </div>
    )
  }

  noBookings(){
    return(
      <div className='no-bookings'>
        <h1>You Have no Bookings</h1>
        <br /><br />
        <button className='btn' onClick={() => this.props.history.push('/')}>Make a Reservation!</button>
      </div>
    )
  }

  render(){
    const {bookings} = this.props
    if (!bookings){
      return null
    }
    return(
      <div className='bookings'>
        <div className='booking-index'>
          {bookings ? this.bookingMap() : this.noBookings()}
        </div>
      </div>
    )
  }
}

export default BookingIndex
