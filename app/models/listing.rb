class Listing < ApplicationRecord
  validates :title, :address, :lat, :lng, :state, :city, :zipcode, :beds, :price, presence: true

  has_many_attached :photos
  
end
