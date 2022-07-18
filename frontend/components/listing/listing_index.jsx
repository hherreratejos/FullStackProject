import React from 'react';
import ListingIndexItem from './listing_index_item'

class ListingIndex extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchListings()
  }

  render(){
    const {listings} = this.props
    return(
      <div className='listing-index'>
        {listings.map(listing => (
          <ListingIndexItem
            listing={listing}
            key={listing.id}
          />
        ))}
      </div>
    );
  }
}

export default ListingIndex