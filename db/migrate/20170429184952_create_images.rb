class CreateImages < ActiveRecord::Migration[5.1]
  def change
    create_table :images do |t|
      t.integer :house_id, null: false
      t.attachment :photo, null: false

      t.timestamps
    end

    add_index :images, :house_id
  end
end
