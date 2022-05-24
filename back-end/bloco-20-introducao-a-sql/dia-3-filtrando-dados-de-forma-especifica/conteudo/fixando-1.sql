SELECT * FROM customer
WHERE email = 'LEONARD.SCHOFIELD@sakilacustomer.org';

SELECT * FROM customer
WHERE active IS FALSE AND store_id = 2 AND first_name <> 'KENNETH'
ORDER BY first_name;
 /* SELECT * FROM sakila.customer
WHERE active is FALSE
AND store_id = 2
AND first_name NOT LIKE 'KENNETH%'
ORDER BY first_name; */

SELECT * FROM film;

SELECT title, description, release_year, replacement_cost FROM film
WHERE (rating IN('G', 'PG', 'PG-13', 'R')) AND replacement_cost >= 18 
ORDER BY replacement_cost DESC, title LIMIT 100;

SELECT COUNT(*) FROM customer
WHERE active IS TRUE AND store_id = 1;

SELECT COUNT(*) FROM customer
WHERE active IS FALSE AND store_id = 1;

SELECT title, description, release_year, replacement_cost FROM film
WHERE rating = 'NC-17'
ORDER BY rental_rate ASC, title;