import React from "react";
import { withRouter } from 'react-router-dom'
import { Link } from "react-router-dom";

class BookingIndexItem extends React.Component{
  constructor(props){
    super(props)
  }

  destroy(){

  }

  render(){
    const { id, startdate, enddate, nguests } = this.props.booking
    return(
      <div className="booking-index-item">
        <div className="booking-index-img"></div>
        <p>Checkin: {startdate}</p>
        <p>Cheackout: {enddate}</p>
        <p>Number of guests: {nguests}</p><br />
        <Link to={`/bookings/${id}/edit`}>Edit</Link>
        <Link to={`/booking/delete/${id}`}>Delete</Link>
      </div>
    )
  }
}

export default withRouter(BookingIndexItem)