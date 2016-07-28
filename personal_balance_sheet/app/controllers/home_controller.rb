class HomeController < ApplicationController
  before_action :authenticate_user!

  def index
    @datainputs = DataInput.where(user_id: current_user.id)
  end

  def form
    @datainput = DataInput.new
  end

  def submit
    d = DataInput.new(data_input_params)
    d.user_id = current_user.id
    d.save
    redirect_to '/home/index', notice: "Watch it, mister!"
  end

  def destroy
    @datainput = DataInput.find(params[:id])
    @datainput.destroy
    redirect_to '/home/index', notice: 'Money was successfully destroyed.'
  end

  def data_input_params
    params.require(:data_input).permit(:date, :income, :rent, :loans, :insurance, :utilities, :entertainment, :food, :misc, :balance, :comment)
  end
end
