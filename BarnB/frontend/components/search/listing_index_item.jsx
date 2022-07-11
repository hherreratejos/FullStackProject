import React from 'react';
import { withRouter } from 'react-router-dom';

import ListingShowContainer from '../listing_show/listing_show_container';

class IndexItem extends React.Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.props.history.push(`/listings/${this.props.listing.id}`);
  }

  render() {
    return(
      hello
    )
  }
}

export default withRouter(IndexItem)