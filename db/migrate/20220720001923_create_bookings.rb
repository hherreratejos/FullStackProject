class CreateBookings < ActiveRecord::Migration[5.2]
  def change
    create_table :bookings do |t|
      t.datetime :startdate, null: false
      t.datetime :enddate, null: false
      t.integer :nguests, null: false
      t.integer :guest_id, null: false
      t.integer :listing_id, null: false
      
      t.timestamps
    end
    add_index :bookings, :guest_id, unique: true
    add_index :bookings, :listing_id, unique: true
  end
end
