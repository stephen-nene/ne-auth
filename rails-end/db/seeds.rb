# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
require 'faker'

# Seed Users
puts "\n🌟 Seeding Users..."

users_data = {
  employees: [ 'machaa', 'maish', 'symoboda'],
  admins: ['steve', 'paul'],
  customers: ['kairetu', 'jomacha', 'inland', 'lineza', 'luxury', 'mimmo']
}

users_data.each do |role, names|
  names.each do |name|
    pricing = role.to_s.singularize == 'customer' ? rand(6..8) * 5 + 40 : nil

    User.create!(
      first_name: name.capitalize,
      last_name: Faker::Name.last_name,
      email: "#{name.downcase}@ecoblazz.com",
      username: name.downcase,
      password: 'password',
      # password: BCrypt::Password.create('password'),
      number: Faker::PhoneNumber.cell_phone,
      role: User.roles[role.to_s.singularize],
      status: User.statuses[:active],
      profile_pic: 'https://placehold.co/600x400'
    )
  end
end

puts "👤 Created #{User.count} users ... ✅"