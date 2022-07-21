class BlaBla4 < ActiveRecord::Migration[5.2]
  def change
    remove_column :bookings, :guest_id
    remove_column :bookings, :listing_id

    add_column :bookings, :guest_id, :integer, null: false
    add_column :bookings, :listing_id, :integer, null: false

    add_index :bookings, [:guest_id, :listing_id], unique: true
  end
end
