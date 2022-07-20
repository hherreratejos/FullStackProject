class Api::BookingsController < ApplicationController
  before_action :require_logged_in

  def index
    @user = User.find_by(user_id: params[:user_id])
    @bookings = @user.bookings
    render :index
  end

  def create
    @user = current_user
    @user.user_id = current_user.id
    @booking = Booking.new(booking_params)
    if @booking.save
      render :show
    else
      # flash[:errors] = @booking.errors.full_messages
      render json: @booking.errors.full_messages
    end
  end

  def show
    @booking = Booking.find_by(id: params[:id])
    render :show
  end
  
  private

  def booking_params
    params.require(:booking).permit(:startdate, :enddate, :nguests, :guest_id, :listing_id)  
  end

end
