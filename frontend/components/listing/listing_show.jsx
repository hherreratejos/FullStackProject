import React from 'react';

class ListingShow extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.fetchListing()
  }

  render (){
    if (!this.props.listing){
      return null
    }
    const {title, address, state, city, zipcode, beds, price } = this.props.listing
    return(
      <div className='listing-show-container'>
        <div className='listing-show'>
          <div className='general-show'>
            <br />
            <h2 id='title'>{title}</h2>
            <br />
            <div className='listing-show-img'>imgs</div>
          </div>
        </div>
      </div>
    )
  }
}

export default ListingShow