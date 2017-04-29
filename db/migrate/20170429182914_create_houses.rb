class CreateHouses < ActiveRecord::Migration[5.1]
  def change
    create_table :houses do |t|
      t.string :city, null: false
      t.decimal :price, null: false, precision: 12, scale: 2
      t.text :description, null: false
      t.integer :user_id, null: false

      t.timestamps
    end
  end
end
