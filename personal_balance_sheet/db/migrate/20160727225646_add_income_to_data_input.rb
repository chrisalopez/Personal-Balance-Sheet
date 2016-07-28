class AddIncomeToDataInput < ActiveRecord::Migration
  def change
    add_column :data_inputs, :income, :integer
  end
end
