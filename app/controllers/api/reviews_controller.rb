class Api::ReviewsController < ApplicationController

  def create

  end

  def index
    @listing = Listing.find_by(id: params[:listing_id])
    @reviews = @listing.reviews
    render :index
  end

  def destroy

  end

end
