import React from 'react';

class BookingShow extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.fetchBooking()
  }

  render(){
    const { startdate, enddate, nguests, id } = this.props.booking
    return(
      <div>
        <h1>Confirmation</h1>
        <p>{startdate}</p>
        <p>{enddate}</p>
        <p>{nguests}</p>
        <p>ShowPage</p>
        <p>ShowPage</p>
        <p>ShowPage</p>
        <p>ShowPage</p>
        <p>ShowPage</p>
        <p>ShowPage</p>
      </div>
    )
  }
}

export default BookingShow