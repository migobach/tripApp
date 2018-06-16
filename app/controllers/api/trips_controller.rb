class Api::TripsController < Api::ApplicationController
  before_action :set_item, only: [:create, :update, :destroy]
  
  def index
    render json: Trip.all.order(:created_at)
  end

  def show
  end

  def create
    trip = Trip.new(trip_params)
    if trip.save
      render json: trip
    else 
      render_errors(trip)
    end
  end

  def update
    @trip.update(complete: !@trip.complete)
    render json: @trip 
  end

  def destroy
    @trip.destroy
  end

  private 

  def set_item
    params.require(:trip).permit(:name)
  end

  def trip_params
    @trip = Trip.find(params[:id])
  end
end
