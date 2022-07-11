class Listing < ApplicationRecord
  validates :title, :address, :lat, :lng, :state, :city, :zipcode, :beds, :price, presence: true
end
