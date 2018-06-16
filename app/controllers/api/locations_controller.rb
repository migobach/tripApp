class Api::LocationsController < ApplicationController
  before_action :set_trip
  before_action :set_location, only: [:show, :edit, :update, :destroy]

  def index
    render json: @trip.locations
  end

  def show
    render json: @location
  end

  def create
    location = @trip.location.new(trip_params)
  end

  def update
    if @location.update(trip_params)
      render json: @location
    else
      render_errors(@location)
    end
  end

  def destroy
    @location.destroy
  end

  private 
  
  def trip_params
    params.require(:location).permit(:title)
  end

  def set_trip
    @trip = Trip.find(params[:trip_id])
  end

  def set_location
    @location = Location.find(params[:id])
  end

end