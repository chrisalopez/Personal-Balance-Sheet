class CategoriesController < ApplicationController
  def create
    # insert categories into the database
    # MoneyInput.create(category: "rent", date: "12/30/2015", user_id:1, cash_flow:400)

    date = params[:date]
    params[:category]
    params[:user_id]
    params[:cash_flow]


    redirect_to '/home/index'
  end
end
