require 'prawn'

Prawn::Document.generate("app/book.pdf") do
  i = 1
  while File.exist?("tempimg/image%07d.png" % i)
    image "tempimg/image%07d.png" % i, :width => 200, :vposition => :bottom
    start_new_page
    i += 1
  end
end
