-- Database name

-- Document your create tables SQL here


CREATE TABLE treats(
id SERIAL PRIMARY KEY,
name VARCHAR(80),
description TEXT,
pic VARCHAR(80)
);

INSERT INTO treats (name, description, pic)
VALUES ('Cupcake', 'A delicious cupcake', '/assets/cupcake.jpg'),
('Donuts', 'Mmmm donuts', '/assets/donuts.jpg'),
('Goldfish', 'I hope we''re talking about the crackers...', '/assets/goldfish.jpg'),
('Ice Cream', 'Rocky Road Reigns Supreme', '/assets/icecream.jpg'),
('Potato', 'I could go for a loaded baked one right about now', '/assets/potato.jpg');
