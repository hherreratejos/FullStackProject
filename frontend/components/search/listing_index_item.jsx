import React from 'react';
import { withRouter } from 'react-router-dom';


class IndexItem extends React.Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.props.history.push(`/listings/${this.props.listing.id}`);
  }

  render() {
    const { title, address, state, city, zipcode, beds, price } = this.props.listing
    return(
      <div>
        <p>Title: {title}</p>
        <p>Address: {address}</p>
        <p>State: {state}</p>
        <p>City: {city}</p>
        <p>Zipcode: {zipcode}</p>
        <p>Numbert of beds: {beds}</p>
        <p>Price per night: {price}</p>
      </div>
    )
  }
}

export default withRouter(IndexItem)