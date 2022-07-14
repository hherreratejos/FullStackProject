class Api::ListingsController < ApplicationController

  def show
    @listing = Listing.find(params[:id])
  end

  def index
    @listings = Listing.all
    render :index
  end

  def create
    @listing = Listing.create!(listing_params)
    render :show
  end

  private

  def listing_params
    params.require(:listing).permit(:title, :address, :lat, :lng, :state, :city, :zipcode, :beds, :price)
  end
  
end
