class SliderController < ApplicationController
	def index
		@fotos = Foto.all
	end
end
