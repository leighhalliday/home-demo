class ImageSerializer < ActiveModel::Serializer
  attributes :id, :thumb_url, :medium_url

  def thumb_url
    object.photo.url(:thumb)
  end

  def medium_url
    object.photo.url(:medium)
  end
end
