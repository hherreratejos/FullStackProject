# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.delete_all
Listing.delete_all

l1 = Listing.create!(
  title: 'Cool spacious place with lots of computers',
  address: '825 Battery St',
  lat: 37.798697,
  lng: -122.401240,
  state: 'California',
  city: 'San Francisco',
  zipcode: 123456,
  beds: 3,
  price: 70
)

l2 = Listing.create!(
  title: 'Small Studio',
  address: '2123 Franklin St',
  lat: 37.794124,
  lng: -122.424955,
  state: 'California',
  city: 'San Francisco',
  zipcode: 94109,
  beds: 5,
  price: 90
)

l3 = Listing.create!(
  title: 'coolest place',
  address: '2931 Rivera St',
  lat: 37.745612,
  lng: -122.498018,
  state: 'California',
  city: 'San Francisco',
  zipcode: 94116,
  beds: 7,
  price: 130
)

l4 = Listing.create!(
  title: 'Big house, near BART',
  address: '331 Anza St',
  lat: 37.780226,
  lng: -122.449960,
  state: 'California',
  city: 'San Francisco',
  zipcode: 94118,
  beds: 4,
  price: 270
)

u1 = User.create!(
  email: 'demo@user.com',
  fname: 'Demo',
  lname: 'User',
  password: '123456'
)

u2 = User.create!(
  email: 'h@mail.com',
  fname: 'H',
  lname: 'Herrera',
  password: '123456'
)