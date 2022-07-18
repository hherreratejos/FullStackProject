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
    const { id, title, address, state, city, zipcode, beds, price } = this.props.listing
    return(
      <div className='listing' onClick = {() => 
        this.props.history.push(`/listings/${id}`)
      }>
        <div className='index-img'></div>
        <p>{address}, {state}</p>
        <br />
        <br />
        <div className='listing-price'>${price}/night</div>
      </div>
    )
  }
}

export default withRouter(IndexItem)