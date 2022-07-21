import { connect } from "react-redux";
import ListingShow from "./listing_show";
import { fetchListing } from '../../actions/listing_actions'
import { createBooking } from "../../actions/booking_actions";

const mapStateToProps = (state, ownProps) => {
  return {
    listing: state.entities.listings[ownProps.match.params.id],
    currentUser: state.session
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchListing: () => dispatch(fetchListing(ownProps.match.params.id)),
    createBooking: booking => dispatch(createBooking(booking))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ListingShow)