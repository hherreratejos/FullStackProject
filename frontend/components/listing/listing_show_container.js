import { connect } from "react-redux";
import ListingShow from "./listing_show";
import { fetchListing } from '../../actions/listing_actions'

const mapStateToProps = (state, ownProps) => {
  return {
    listing: state.entities.listings[ownProps.match.params.id]
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchListing: () => dispatch(fetchListing(ownProps.match.params.id))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ListingShow)