class AddRetratoToFotos < ActiveRecord::Migration
  def change
  	add_column :fotos, :retrato_file_name, :string
  	add_column :fotos, :retrato_content_type, :string
  	add_column :fotos, :retrato_file_size, :integer
  	add_column :fotos, :retrato_updated_at, :datetime
  end
end
