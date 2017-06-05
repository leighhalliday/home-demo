class HousesController < ApplicationController
  before_action :authenticate_user!, only: [:new, :create]

  def index
  end

  def new
  end

  def create
    house = current_user.houses.new(house_params)
    if house.save
      render json: house
    else
      render json: house.errors.to_json, status: :bad_request
    end
  end

  def show
    house = House.find(params[:id])
    @house_hash = HouseSerializer.new(house).serializable_hash

    respond_to do |format|
      format.html
      format.json {
        render json: @house
      }
    end
  end

  def featured
    houses = House.last(4)
    render json: houses
  end

  def search
    scope = House
    scope = scope.where(city: params[:city]) if params[:city].present?
    scope = scope.where("price >= ?", params[:min]) if params[:min].present?
    scope = scope.where("price <= ?", params[:max]) if params[:max].present?
    houses = scope.last(8)

    render json: houses
  end

  private

  def house_params
    params.require(:house).permit(:city, :price, :description, images_attributes: [:photo])
  end
end
