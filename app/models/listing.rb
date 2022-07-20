class Listing < ApplicationRecord
  validates :title, :address, :lat, :lng, :state, :city, :zipcode, :beds, :price, presence: true

  has_many_attached :photos

  has_many :bookings,
    primary_key: :id,
    foreign_key: :listing_id,
    class_name: :Booking
  
end
