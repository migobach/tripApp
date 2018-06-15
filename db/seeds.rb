5.times do 
  trip = Trip.create(
    name: Faker::BossaNova.song,
  )
  10.times do 
    location = trip.locations.create(
      title: Faker::Address.city
    )
    1.times do
      location.addresses.create(
        street: Faker::Address.street_address,
        city: Faker::Address.city,
        state: Faker::Address.state,
        zip: Faker::Address.zip_code,
        description: Faker::ChuckNorris.fact,
        )
      end
  end
end

puts "You Rock!"