class Review < ApplicationRecord

  validates :title, :body, :user_id, :listing_id, presence: true

  belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

  belongs_to :listing,
    primary_key: :id,
    foreign_key: :listing_id,
    class_name: :Listing
    
end
