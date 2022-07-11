import React from 'react';

const ListingIndex = ({ listings }) => (
  <div>
    <h2>Listings: </h2>
    {listings.map(listing => (
      <ListingIndexItem
        listing={listing}
        key={listing.id}
      />
    ))}
  </div>
);

export default ListingIndex