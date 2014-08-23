class Foto < ActiveRecord::Base
	has_attached_file :retrato, :styles => {:medium => '300x300>', :thumb => '80x80#' }
end
