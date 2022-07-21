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
Booking.delete_all

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
  address: 'Battery St',
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
  address: 'Franklin St',
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
  address: 'Rivera St',
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
  address: 'Anza St',
  lat: 37.780226,
  lng: -122.449960,
  state: 'California',
  city: 'San Francisco',
  zipcode: 94118,
  beds: 4,
  price: 270,
  description: 'Cool fancy mansion, perfect for fancy spies level fancy parties.'
)

l5 = Listing.create!(
  title: 'Beachfront Tahoe Home with panoramic Views of Lake Tahoe',
  address: 'Zephyr Cove',
  lat: 37.780289,
  lng: -122.449784,
  state: 'California',
  city: 'San Francisco',
  zipcode: 94153,
  beds: 2,
  price: 648,
  description: 'This is a beautiful beachfront, 3 bedroom cozy family cabin/home located in Marla Bay Zephyr Cove. The bonus room is only available in the Summer months as there is no heat in this room.'
)

l6 = Listing.create!(
  title: 'Lake Tahoe guest house. Shared Private Dock/beach',
  address: 'Crystal Bay',
  lat: 37.780469,
  lng: -122.449524,
  state: 'California',
  city: 'San Francisco',
  zipcode: 94253,
  beds: 6,
  price: 173,
  description: 'Bella Vista is beautifully located in a garden setting, overlooking the lake. It is truly romantic, and a perfect property for family fun'
)

l7 = Listing.create!(
  title: 'The Pine Mountain Lakehouse near Yosemite',
  address: 'Groveland',
  lat: 37.784669,
  lng: -122.449154,
  state: 'California',
  city: 'San Francisco',
  zipcode: 94653,
  beds: 3,
  price: 284,
  description: 'The Lakehouse is an idyllic 4-BR, 3-bath cabin nestled on the shores of Pine Mountain Lake. It is only 26 miles from Yosemite, 2.2 miles from a grocery store, 2.5 miles from downtown Groveland, and is suitable for up to 8 adults (10 if two pairs do not mind sharing double beds).'
)

l8 = Listing.create!(
  title: 'Konocti Lake House- Lakeport-NEW!!!!',
  address: 'Lakeport',
  lat: 37.787369,
  lng: -122.449244,
  state: 'California',
  city: 'San Francisco',
  zipcode: 94273,
  beds: 5,
  price: 312,
  description: 'Welcome to the Konocti Lake House! We have designed the house with the angler in mind.'
)

l9 = Listing.create!(
  title: 'Tahoe Time Cabin',
  address: 'Kings Beaches',
  lat: 37.787369,
  lng: -122.442444,
  state: 'California',
  city: 'San Francisco',
  zipcode: 94263,
  beds: 6,
  price: 512,
  description: 'Enjoy this private, lake-view cabin on Secline Beach for your next lake Tahoe vacation. Just steps to the water, the cabin is located on the quiet lakefront drive of Brockaway Vista next to Secline Beach.'
)

l10 = Listing.create!(
  title: 'Lake Tahoe Shoreside Retreat: Stunning Lake Views!',
  address: 'Zephyr Core',
  lat: 37.783479,
  lng: -122.442443,
  state: 'California',
  city: 'San Francisco',
  zipcode: 94226,
  beds: 5,
  price: 512,
  description: 'Enjoy the fresh air and stunning views at this charming Elk Point Country Club vacation rental! Featuring 4 bedrooms, 5 bathrooms, 2 furnished decks, a fully equipped kitchen, and easy access to a private beach, this luxury home is sure to make your stay unforgettable!'
)

l11 = Listing.create!(
  title: 'Gray Bear Lake View Estate - Stunning Cabin w/ 4 Master Suites, Private Hot Tub + Easy Walk to Lake',
  address: 'Carnelian Bay',
  lat: 37.783369,
  lng: -122.442353,
  state: 'California',
  city: 'San Francisco',
  zipcode: 94246,
  beds: 9,
  price: 452,
  description: 'A truly exceptional lake view vacation home, Gray Bear Estate is designed to deliver the ultimate vacation experience. The open concept living area sits upstairs, with the expansive Chefs kitchen at the heart of the home. Outfitted with an eight burner Wolf range, butcher block island, mahogany bar seating four, and formal dining area for eight, we expect many evenings to be spent enjoying a home cooked meal.'
)

l12 = Listing.create!(
  title: 'The PEAK Everest 14 - Exclusive Lakefront Luxury',
  address: 'South Lake Tahoe',
  lat: 37.783339,
  lng: -122.442753,
  state: 'California',
  city: 'San Francisco',
  zipcode: 94266,
  beds: 4,
  price: 372,
  description: 'A truly exceptional lake view vacation home, Gray Bear Estate is designed to deliver the ultimate vacation experience. The open concept living area sits upstairs, with the expansive Chefs kitchen at the heart of the home. Outfitted with an eight burner Wolf range, butcher block island, mahogany bar seating four, and formal dining area for eight, we expect many evenings to be spent enjoying a home cooked meal.'
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

casa2_1 = URI.open('https://barnb-dev.s3.us-west-1.amazonaws.com/casa2-1.webp') 
casa2_2 = URI.open('https://barnb-dev.s3.us-west-1.amazonaws.com/casa2-2.webp') 
casa2_3 = URI.open('https://barnb-dev.s3.us-west-1.amazonaws.com/casa2-3.webp') 
casa2_4 = URI.open('https://barnb-dev.s3.us-west-1.amazonaws.com/casa2-4.webp') 
casa2_5 = URI.open('https://barnb-dev.s3.us-west-1.amazonaws.com/casa2-5.webp')

casa3_1 = URI.open('https://barnb-dev.s3.us-west-1.amazonaws.com/casa3-1.jpg') 
casa3_2 = URI.open('https://barnb-dev.s3.us-west-1.amazonaws.com/casa3-2.webp')
casa3_3 = URI.open('https://barnb-dev.s3.us-west-1.amazonaws.com/casa3-3.webp')
casa3_4 = URI.open('https://barnb-dev.s3.us-west-1.amazonaws.com/casa3-4.webp')
casa3_5 = URI.open('https://barnb-dev.s3.us-west-1.amazonaws.com/casa3-5.jpg')

casa4_1 = URI.open('https://barnb-dev.s3.us-west-1.amazonaws.com/casa4-1.webp')
casa4_2 = URI.open('https://barnb-dev.s3.us-west-1.amazonaws.com/casa4-2.webp')
casa4_3 = URI.open('https://barnb-dev.s3.us-west-1.amazonaws.com/casa4-3.webp')
casa4_4 = URI.open('https://barnb-dev.s3.us-west-1.amazonaws.com/casa4-4.webp')
casa4_5 = URI.open('https://barnb-dev.s3.us-west-1.amazonaws.com/casa4-5.webp')

casa5_1 = URI.open('https://barnb-dev.s3.us-west-1.amazonaws.com/casa5-1.webp')
casa5_2 = URI.open('https://barnb-dev.s3.us-west-1.amazonaws.com/casa5-2.webp')
casa5_3 = URI.open('https://barnb-dev.s3.us-west-1.amazonaws.com/casa5-3.webp')
casa5_4 = URI.open('https://barnb-dev.s3.us-west-1.amazonaws.com/casa5-4.webp')
casa5_5 = URI.open('https://barnb-dev.s3.us-west-1.amazonaws.com/casa5-5.webp')

casa6_1 = URI.open('https://barnb-dev.s3.us-west-1.amazonaws.com/casa6-1.webp')
casa6_2 = URI.open('https://barnb-dev.s3.us-west-1.amazonaws.com/casa6-2.webp')
casa6_3 = URI.open('https://barnb-dev.s3.us-west-1.amazonaws.com/casa6-3.webp')
casa6_4 = URI.open('https://barnb-dev.s3.us-west-1.amazonaws.com/casa6-4.webp')
casa6_5 = URI.open('https://barnb-dev.s3.us-west-1.amazonaws.com/casa6-5.webp')

casa7_1 = URI.open('https://barnb-dev.s3.us-west-1.amazonaws.com/casa7-1.webp')
casa7_2 = URI.open('https://barnb-dev.s3.us-west-1.amazonaws.com/casa7-2.webp')
casa7_3 = URI.open('https://barnb-dev.s3.us-west-1.amazonaws.com/casa7-3.webp')
casa7_4 = URI.open('https://barnb-dev.s3.us-west-1.amazonaws.com/casa7-4.webp')
casa7_5 = URI.open('https://barnb-dev.s3.us-west-1.amazonaws.com/casa7-5.webp')

casa8_1 = URI.open('https://barnb-dev.s3.us-west-1.amazonaws.com/casa8-1.webp')
casa8_2 = URI.open('https://barnb-dev.s3.us-west-1.amazonaws.com/casa8-2.webp')
casa8_3 = URI.open('https://barnb-dev.s3.us-west-1.amazonaws.com/casa8-3.webp')
casa8_4 = URI.open('https://barnb-dev.s3.us-west-1.amazonaws.com/casa8-4.webp')
casa8_5 = URI.open('https://barnb-dev.s3.us-west-1.amazonaws.com/casa8-5.webp')

casa9_1 = URI.open('https://barnb-dev.s3.us-west-1.amazonaws.com/casa9-1.webp')
casa9_2 = URI.open('https://barnb-dev.s3.us-west-1.amazonaws.com/casa9-2.webp')
casa9_3 = URI.open('https://barnb-dev.s3.us-west-1.amazonaws.com/casa9-3.webp')
casa9_4 = URI.open('https://barnb-dev.s3.us-west-1.amazonaws.com/casa9-4.webp')
casa9_5 = URI.open('https://barnb-dev.s3.us-west-1.amazonaws.com/casa9-5.webp')

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

l5.photos.attach(io: casa2_1, filename: 'casa2_1.webp')
l5.photos.attach(io: casa2_2, filename: 'casa2_2.webp')
l5.photos.attach(io: casa2_3, filename: 'casa2_3.webp')
l5.photos.attach(io: casa2_4, filename: 'casa2_4.webp')
l5.photos.attach(io: casa2_5, filename: 'casa2_5.webp')

l6.photos.attach(io: casa3_1, filename: 'casa3_1.webp')
l6.photos.attach(io: casa3_2, filename: 'casa3_2.webp')
l6.photos.attach(io: casa3_3, filename: 'casa3_3.webp')
l6.photos.attach(io: casa3_4, filename: 'casa3_4.webp')
l6.photos.attach(io: casa3_5, filename: 'casa3_5.webp')

l7.photos.attach(io: casa4_1, filename: 'casa4_1.webp')
l7.photos.attach(io: casa4_2, filename: 'casa4_2.webp')
l7.photos.attach(io: casa4_3, filename: 'casa4_3.webp')
l7.photos.attach(io: casa4_4, filename: 'casa4_4.webp')
l7.photos.attach(io: casa4_5, filename: 'casa4_5.webp')

l8.photos.attach(io: casa5_1, filename: 'casa5_1.webp')
l8.photos.attach(io: casa5_2, filename: 'casa5_2.webp')
l8.photos.attach(io: casa5_3, filename: 'casa5_3.webp')
l8.photos.attach(io: casa5_4, filename: 'casa5_4.webp')
l8.photos.attach(io: casa5_5, filename: 'casa5_5.webp')

l9.photos.attach(io: casa6_1, filename: 'casa6_1.webp')
l9.photos.attach(io: casa6_2, filename: 'casa6_2.webp')
l9.photos.attach(io: casa6_3, filename: 'casa6_3.webp')
l9.photos.attach(io: casa6_4, filename: 'casa6_4.webp')
l9.photos.attach(io: casa6_5, filename: 'casa6_5.webp')

l10.photos.attach(io: casa7_1, filename: 'casa7_1.webp')
l10.photos.attach(io: casa7_2, filename: 'casa7_2.webp')
l10.photos.attach(io: casa7_3, filename: 'casa7_3.webp')
l10.photos.attach(io: casa7_4, filename: 'casa7_4.webp')
l10.photos.attach(io: casa7_5, filename: 'casa7_5.webp')

l11.photos.attach(io: casa8_1, filename: 'casa8_1.webp')
l11.photos.attach(io: casa8_2, filename: 'casa8_2.webp')
l11.photos.attach(io: casa8_3, filename: 'casa8_3.webp')
l11.photos.attach(io: casa8_4, filename: 'casa8_4.webp')
l11.photos.attach(io: casa8_5, filename: 'casa8_5.webp')

l12.photos.attach(io: casa9_1, filename: 'casa9_1.webp')
l12.photos.attach(io: casa9_2, filename: 'casa9_2.webp')
l12.photos.attach(io: casa9_3, filename: 'casa9_3.webp')
l12.photos.attach(io: casa9_4, filename: 'casa9_4.webp')
l12.photos.attach(io: casa9_5, filename: 'casa9_5.webp')
