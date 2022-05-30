SELECT * FROM film;
SELECT title AS Nome, release_year AS Lançamento, rating AS Classificação FROM film;
SELECT COUNT(title) FROM film;

SELECT * FROM actor;
SELECT DISTINCT last_name FROM actor;
SELECT COUNT(DISTINCT last_name) FROM actor;
SELECT * FROM actor ORDER BY last_name ASC, first_name DESC;

SELECT * FROM language;
SELECT * FROM language WHERE name != 'English';

SELECT * FROM film;
SELECT title AS Filme, release_year AS Lançamento, length AS Duração, rating AS Classificação, replacement_cost AS 'Custo de Substituição' FROM film
ORDER BY length DESC, replacement_cost ASC LIMIT 20;
