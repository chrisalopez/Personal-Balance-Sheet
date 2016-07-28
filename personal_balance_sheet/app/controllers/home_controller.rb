class HomeController < ApplicationController
  before_action :authenticate_user!

  def index
  end

  def form
    @datainput = DataInput.new
  end

  def submit
  end
end
