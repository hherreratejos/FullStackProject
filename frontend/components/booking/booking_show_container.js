import { connect } from 'react-redux';
import BookingShow from './booking_show';
import { fetchBooking } from '../../actions/booking_actions';

const mapStateToProps = (state, ownProps) => {
  return{
    booking: state.entities.bookings[ownProps.match.params.id]
  };
}

const mapDispatchToProps = dispatch => {
  return {
    fetchBooking: booking => dispatch(fetchBooking(booking))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BookingShow)