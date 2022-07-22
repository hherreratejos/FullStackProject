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
        <div className="booking-info">
          <p>Checkin: {startdate}</p>
          <p>Checkout: {enddate}</p>
          <p>Number of guests: {nguests}</p><br />
        </div>
        <div className="booking-index-btns">
          <Link className="btn bii-btn" to={`/bookings/${id}/edit`}>Edit</Link>
          <Link className='btn bii-btn' to={`/booking/delete/${id}`}>Delete</Link>
        </div>
      </div>
    )
  }
}

export default withRouter(BookingIndexItem)