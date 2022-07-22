import { connect } from 'react-redux';
import { destroyBooking } from '../../actions/booking_actions'
import Confirmation from './confirmation';

const mapStateToProps = (state, ownProps) => {
  return{
    bookingId: parseInt(ownProps.match.params.bookingId)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    destroyBooking: id => dispatch(destroyBooking(id))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Confirmation)