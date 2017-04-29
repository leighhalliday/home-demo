class House < ApplicationRecord
  belongs_to :user
  has_many :images
end
