class HousesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def new
  end

  def create
    house = House.new(house_params)
    house.user = User.first
    if house.save
      render json: house.to_json
    else
      render json: house.errors.to_json, status: :bad_request
    end
  end

  private

  def house_params
    params.require(:house).permit(:city, :price, :description, images_attributes: [:photo])
  end
end
