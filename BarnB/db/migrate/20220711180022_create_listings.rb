class CreateListings < ActiveRecord::Migration[5.2]
  def change
    create_table :listings do |t|
      t.string :title, null: false
      t.string :address, null: false
      t.float :lat, null: false
      t.float :lng, null: false
      t.string :state, null: false
      t.string :city, null: false
      t.integer :zipcode, null: false
      t.integer :beds, null: false
      t.integer :price, null: false
      
      t.timestamps
    end
  end
end
