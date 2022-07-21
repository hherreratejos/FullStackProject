class BlaBla2 < ActiveRecord::Migration[5.2]
  def change
    remove_column :bookings, :startdate
    remove_column :bookings, :enddate

    add_column :bookings, :startdate, :string, null: false
    add_column :bookings, :enddate, :string, null: false
  end
end
