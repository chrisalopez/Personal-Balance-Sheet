class CreateDataInputs < ActiveRecord::Migration
  def change
    create_table :data_inputs do |t|
      t.integer :rent
      t.integer :utilities
      t.integer :loans
      t.integer :insurance
      t.integer :entertainment
      t.integer :food
      t.integer :misc
      t.integer :user_id
      t.date :date
      t.text :comment

      t.timestamps null: false
    end
  end
end
