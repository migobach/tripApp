class Api::TripsController < ApplicationController
  before_action :set_trip, only: [ :show, :update, :destroy]
  
  def index
    render json: Trip.all.order(:created_at)
  end

  def show
    render json: @trip
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

    def set_trip
      @trip = Trip.find(params[:id])
    end

    def trip_params
      params.require(:trip).permit(:name)
    end
end
