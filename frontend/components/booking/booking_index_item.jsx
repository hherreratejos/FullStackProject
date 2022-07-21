import React from "react";
import { withRouter } from 'react-router-dom'

class BookingIndexItem extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    const { id, startdate, enddate, nguests } = this.props.booking
    return(
      <div className="booking-index-item">
        {/* <img src={} /> */}
        <p>Checkin: {startdate}</p>
        <p>Cheackout: {enddate}</p>
        <p>Number of guests: {nguests}</p><br />
      </div>
    )
  }
}

export default withRouter(BookingIndexItem)