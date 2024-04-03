class CreateTokens < ActiveRecord::Migration[7.1]
  def change
    create_table :tokens do |t|
      t.references :user, null: false, foreign_key: true
      t.string :token
      t.datetime :created_at
      t.datetime :expires_at

    end
    add_index :tokens, :token
  end
end
