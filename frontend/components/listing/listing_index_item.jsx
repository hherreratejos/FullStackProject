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
    const { id, title, address, state, city, zipcode, beds, price, photoUrls } = this.props.listing
    return(
      <div className='listing' onClick = {() => 
        this.props.history.push(`/listings/${id}`)
      }>
        <img className='index-img' src={photoUrls[0]} />
        <p>{address}, {state}</p>
        <div className='listing-price'>${price}/night</div>
      </div>
    )
  }
}

export default withRouter(IndexItem)