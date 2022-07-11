import { connect } from "react-redux";

const mapStateToProps = state => ({
  listings: asArray(state.entities)
})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Search)