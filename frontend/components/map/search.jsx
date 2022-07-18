import React from 'react';
import ListingMap from './listing_map';
import ListingIndexContainer from '../listing/listing_index_container';

class Search extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div>
        <ListingMap />
        <ListingIndexContainer />
      </div>
    )
  }
}

export default Search