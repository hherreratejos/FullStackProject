class Api::ListingsController < ApplicationController

  def show
    @listing = Listing.find(params[:id])
  end

  def index
    benches = bounds ? Listing.in_bounds(bounds) : Listing.all

    if params[:minSeating] && params[:maxSeating]
      listings = listings.where(seating: seating_range)
    end

    @listings = listings.includes(:reviews)
  end

  def create
    @listing = Listing.create!(listing_params)
    render :show
  end

  private

  def listing_params
    params.require(:listings).permit(:title, :address, :lat, :lng, :state, :city, :zipcode, :beds, :price)
  end
  
end
