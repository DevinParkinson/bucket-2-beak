class User < ApplicationRecord
  validates_presence_of :name, :email, :zip, :address, :phone, :city, :state
  validates_uniqueness_of :name, :email, :zip, :address, :phone, :city, :state
end
