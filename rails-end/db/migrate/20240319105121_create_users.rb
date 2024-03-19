class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :first_name
      t.string :last_name
      t.string :email, null: false
      t.string :username, null: false
      t.string :password_digest, null: false
      t.string :profile_pic, default: 'https://placehold.co/600x400'
      t.string :number
      t.integer :status, default: 0
      t.integer :role, default: 0

      t.timestamps
    end
  end
end
