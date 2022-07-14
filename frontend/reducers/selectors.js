export const selectListing = ({ listings }, listingId) => {
  return listings[listingId] || { reviewsIds: [] };
};

export const selectReviewsForListing = ({ listings, reviews}, listing) => {
  return listing.reviewIds.map(reviewId => reviews[reviewId]);
};

export const asArray = ({ listings }) => (
  Object.keys(listings).map(key => listings[key])
);