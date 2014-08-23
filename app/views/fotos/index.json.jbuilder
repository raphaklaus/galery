json.array!(@fotos) do |foto|
  json.extract! foto, :id, :nome, :retrato
  json.url foto_url(foto, format: :json)
end
