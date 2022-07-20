# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

User.delete_all
Listing.delete_all

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

l1 = Listing.create!(
  title: 'Cool spacious place with lots of computers',
  address: '825 Battery St',
  lat: 37.798697,
  lng: -122.401240,
  state: 'California',
  city: 'San Francisco',
  zipcode: 123456,
  beds: 3,
  price: 70,
  description: 'Full with people playing either pingpong or chess.'
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
  price: 90, 
  description: 'Comfy, but small studio perfect for 1.'
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
  price: 130,
  description: 'Tree house in the middle of the city, in a man made forest to make it liik jungley.'
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
  price: 270,
  description: 'Cool fancy mansion, perfect for fancy spies level fancy parties.'
)


l4f1 = URI.open('https://barnb-dev.s3.us-west-1.amazonaws.com/mansion1.jpg')
l4f2 = URI.open('https://barnb-dev.s3.us-west-1.amazonaws.com/mansion2.png')
l4f3 = URI.open('https://barnb-dev.s3.us-west-1.amazonaws.com/mansion3.jpg')
l4f4 = URI.open('https://barnb-dev.s3.us-west-1.amazonaws.com/mansion4.jpg')
l4f5 = URI.open('https://barnb-dev.s3.us-west-1.amazonaws.com/mansion5.png')

casa1 = URI.open('https://barnb-dev.s3.us-west-1.amazonaws.com/casa1.jpg')
casa2 = URI.open('https://barnb-dev.s3.us-west-1.amazonaws.com/casa2.jpg')
casa3 = URI.open('https://barnb-dev.s3.us-west-1.amazonaws.com/casa3.jpg')
casa4 = URI.open('https://barnb-dev.s3.us-west-1.amazonaws.com/casa4.webp')
casa5 = URI.open('https://barnb-dev.s3.us-west-1.amazonaws.com/casa5.jpg')

arbol1 = URI.open('https://barnb-dev.s3.us-west-1.amazonaws.com/casaarbol1.jpg')
arbol2 = URI.open('https://barnb-dev.s3.us-west-1.amazonaws.com/casaarbol2.jpg')
arbol3 = URI.open('https://barnb-dev.s3.us-west-1.amazonaws.com/casaarbol3.jpg')
arbol4 = URI.open('https://barnb-dev.s3.us-west-1.amazonaws.com/casaarbol4.jpg')
arbol5 = URI.open('https://barnb-dev.s3.us-west-1.amazonaws.com/casaarbol5.webp')

castillo1 = URI.open('https://barnb-dev.s3.us-west-1.amazonaws.com/castillo1.jpg')
castillo2 = URI.open('https://barnb-dev.s3.us-west-1.amazonaws.com/castillo2.jpeg')
castillo3 = URI.open('https://barnb-dev.s3.us-west-1.amazonaws.com/castillo3.jpg')
castillo4 = URI.open('https://barnb-dev.s3.us-west-1.amazonaws.com/castillo4.jpg')
castillo5 = URI.open('https://barnb-dev.s3.us-west-1.amazonaws.com/castillo5.webp')

l1.photos.attach(io: castillo1, filename: 'castillo1.jpg')
l1.photos.attach(io: castillo2, filename: 'castillo2.jpg')
l1.photos.attach(io: castillo3, filename: 'castillo3.jpg')
l1.photos.attach(io: castillo4, filename: 'castillo4.jpg')
l1.photos.attach(io: castillo5, filename: 'castillo5.jpg')

l2.photos.attach(io: casa1, filename: 'casa1.jpg')
l2.photos.attach(io: casa2, filename: 'casa2.jpg')
l2.photos.attach(io: casa3, filename: 'casa3.jpg')
l2.photos.attach(io: casa4, filename: 'casa4.jpg')
l2.photos.attach(io: casa5, filename: 'casa5.jpg')

l3.photos.attach(io: arbol1, filename: 'casaarbol1.jpg')
l3.photos.attach(io: arbol2, filename: 'casaarbol2.jpg')
l3.photos.attach(io: arbol3, filename: 'casaarbol3.jpg')
l3.photos.attach(io: arbol4, filename: 'casaarbol4.jpg')
l3.photos.attach(io: arbol5, filename: 'casaarbol5.jpg')

l4.photos.attach(io: l4f1, filename: 'mansion1.jpg')
l4.photos.attach(io: l4f2, filename: 'mansion2.jpg')
l4.photos.attach(io: l4f3, filename: 'mansion3.jpg')
l4.photos.attach(io: l4f4, filename: 'mansion4.jpg')
l4.photos.attach(io: l4f5, filename: 'mansion5.jpg')


