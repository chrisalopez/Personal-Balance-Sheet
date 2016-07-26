class HomeController < ApplicationController
  def index
  end

  def form
    redirect_to(:action => 'form')
  end

end
