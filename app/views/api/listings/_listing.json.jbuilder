json.extract! listing, :id, :title, :address, :state, :city, :zipcode, :beds, :price, :description
json.photoUrls listing.photos.map { |file| url_for(file) }