class HouseSerializer < ActiveModel::Serializer
  attributes :id, :city, :price, :description, :created_at
  has_many :images

  def price
    Money.us_dollar(object.price).format
  end
end
