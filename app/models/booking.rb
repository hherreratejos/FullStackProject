class Booking < ApplicationRecord
  validates :startdate, :enddate, :nguests, :guest_id, :listing_id, presence: true
  validates :guest_id, :listing_id, uniqueness: true

  belongs_to :user,
    primary_key: :id,
    foreign_key: :guest_id,
    class_name: :User

  belongs_to :listing,
    primary_key: :id,
    foreign_key: :listing_id,
    class_name: :Listing
  
end
