class Image < ApplicationRecord
  belongs_to :house

  has_attached_file :photo, styles: {thumb: '300x300#', medium: '800x800>'}

  validates_attachment :photo,
    presence: true,
    content_type: {content_type: /\Aimage\/.*\Z/}
end
