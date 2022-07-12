
export const fetchListings = data => {
  return $.ajax({
    method: 'GET',
    url: 'api/listings',
    data
  });
}

export const fetchListing = id => {
  return $.ajax({
    method: 'GET',
    url: `api/listings/${id}`,
  });
}