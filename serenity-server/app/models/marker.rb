class Marker < ActiveRecord::Base

  scope :user_list, lambda { |list_uuid|
    where(list_uuid: list_uuid)
  }
end
