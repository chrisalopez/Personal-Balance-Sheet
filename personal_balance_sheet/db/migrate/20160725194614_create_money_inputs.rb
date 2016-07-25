class CreateMoneyInputs < ActiveRecord::Migration
  def change
    create_table :money_inputs do |t|
      t.text :category
      t.integer :user_id
      t.integer :cash_flow
      t.date :date

      t.timestamps null: false
    end
  end
end
