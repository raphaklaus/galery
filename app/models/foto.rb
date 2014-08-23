class Foto < ActiveRecord::Base
	validates :nome, presence: true
	validates :retrato, presence: true
	has_attached_file :retrato, :styles => {:medium => '300x300>', :thumb => '80x80#' }
end
