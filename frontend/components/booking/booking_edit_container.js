import { connect } from 'react-redux';
import { updateBooking, fetchBooking } from '../../actions/booking_actions'
import BookingEdit from './booking_edit';

const mapStateToProps = (state, ownProps) => {
  return{
    booking: state.entities.bookings[ownProps.match.params.bookingId]
  };
}

const mapDispatchToProps = (dispatch,ownProps) => {
  return {
    updateBooking: (booking) => 
    {
     return dispatch(updateBooking(booking));
    },
    fetchBooking: () => 
    {
      return dispatch(fetchBooking(ownProps.match.params.bookingId))
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BookingEdit)