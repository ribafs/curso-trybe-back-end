USE sakila;

SELECT * FROM address;
SELECT * FROM staff;
INSERT INTO staff (first_name, last_name, address_id, email, store_id, active, username, password)
VALUES ('Sheila', 'Nakashima', 8, 'Sheila.Nakashima@sakilastaff.com', 1, 1, 'SheilaNS', 1234);

INSERT IGNORE INTO staff (first_name, last_name, address_id, email, store_id, active, username, password)
VALUES
-- ('Sheila', 'Nakashima', 8, 'Sheila.Nakashima@sakilastaff.com', 1, 1, 'SheilaNS', 1234),
('Lucas', 'Cardoso', 8, 'Lucas.Cardoso@sakilastaff.com', 2, 1, 'LucasC', 1234),
('Danillo', 'Gonçalves', 10, 'Danillo.Gonçalves@sakilastaff.com', 1, 0, 'DanilloG', 1234);

INSERT INTO sakila.actor (first_name, last_name)
SELECT first_name, last_name FROM sakila.staff LIMIT 5;

SELECT * FROM actor;

SELECT * FROM category;

INSERT INTO category (name) VALUES
('Biografy'),
('Fantasy'),
('Porn');

SELECT * FROM store;
SELECT * FROM staff;

INSERT INTO store (manager_staff_id, address_id) VALUES
(7, 3);