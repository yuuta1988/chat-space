class Message < ApplicationRecord
  belongs_to :group
  belongs_to :user

  validates :content, presence: true, unless: :picture?
  mount_uploader :picture, PictureUploader
end
