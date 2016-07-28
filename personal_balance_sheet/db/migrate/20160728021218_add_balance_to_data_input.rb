class AddBalanceToDataInput < ActiveRecord::Migration
  def change
    add_column :data_inputs, :balance, :integer
  end
end
