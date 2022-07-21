class Api::BookingsController < ApplicationController
  before_action :require_logged_in

  def index
    @user = User.find_by(id: params[:user_id])
    @bookings = @user.bookings
    render :index
  end

  def create
    @user = current_user
    @booking = Booking.new(booking_params)
    @booking.guest_id = current_user.id
    if @booking.save
      render :show
    else
      # flash[:errors] = @booking.errors.full_messages
      render json: @booking.errors.full_messages, status: 422
    end
  end

  def show
    @booking = Booking.find_by(id: params[:id])
    render :show
  end

  def update

  end

  def destroy

  end
  
  private

  def booking_params
    params.require(:booking).permit(:startdate, :enddate, :nguests, :user_id,:listing_id)  
  end

end
