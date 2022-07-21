import { connect } from 'react-redux';
import { fetchBookings } from '../../actions/booking_actions'
import BookingIndex from './booking_index';

const mapStateToProps = (state) => {
  return{
    bookings: Object.values(state.entities.bookings),
    currentUserId: state.session.id,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    fetchBookings: id => dispatch(fetchBookings(id))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BookingIndex)