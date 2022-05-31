SELECT * FROM sakila.customer;
SELECT * FROM sakila.film;

SELECT IF (active = 1, 'Ativo', 'Inativo'), COUNT(active)
FROM sakila.customer
GROUP BY active;

SELECT store_id, active, COUNT(*)
FROM sakila.customer
GROUP BY store_id, active
ORDER BY store_id, active DESC;

SELECT AVG(rental_duration) AS `média de duração de locação`, rating AS `classificação indicativa`
FROM sakila.film
GROUP BY rating
ORDER BY `média de duração de locação` DESC;

SELECT * FROM sakila.address;

SELECT district, COUNT(address)
FROM sakila.address
GROUP BY district
ORDER BY COUNT(address) DESC;