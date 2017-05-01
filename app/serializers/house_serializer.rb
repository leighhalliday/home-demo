class HouseSerializer < ActiveModel::Serializer
  attributes :id, :city, :price, :description, :created_at
  has_many :images
end
