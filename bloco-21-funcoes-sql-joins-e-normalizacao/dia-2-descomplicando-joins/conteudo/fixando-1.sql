SELECT * FROM sakila.actor;
SELECT * FROM sakila.film_actor;

SELECT act.actor_id, act.first_name, fil.film_id
FROM sakila.actor AS act
INNER JOIN sakila.film_actor AS fil
ON act.actor_id = fil.actor_id;

SELECT * FROM sakila.address;
SELECT * FROM sakila.staff;

SELECT st.first_name, st.last_name, ad.address
FROM sakila.staff AS st
INNER JOIN sakila.address AS ad
ON st.address_id = ad.address_id;

SELECT * FROM sakila.customer;

SELECT cus.customer_id, cus.first_name, cus.email, ad.address_id, ad.address
FROM sakila.customer AS cus
INNER JOIN sakila.address AS ad
ON cus.address_id = ad.address_id
ORDER BY cus.first_name DESC
LIMIT 100;

SELECT cus.first_name, cus.email, cus.address_id, ad.address, ad.district
FROM sakila.customer AS cus
INNER JOIN sakila.address AS ad
ON cus.address_id = ad.address_id
WHERE ad.district = 'California' AND cus.first_name LIKE '%rene%';

SELECT cus.first_name, COUNT(ad.address)
FROM sakila.address AS ad
INNER JOIN sakila.customer AS cus
ON ad.address_id = cus.address_id
WHERE cus.active IS TRUE
GROUP BY cus.first_name;

SELECT * FROM sakila.payment;

SELECT st.first_name, st.last_name, AVG(pay.amount)
FROM sakila.staff AS st
INNER JOIN sakila.payment AS pay
ON st.staff_id = pay.staff_id
WHERE YEAR(pay.payment_date) = '2006'
GROUP BY st.first_name, st.last_name;

SELECT ac.actor_id, ac.first_name, fac.film_id, fil.title
FROM sakila.actor AS ac
INNER JOIN sakila.film_actor AS fac
ON ac.actor_id = fac.actor_id
INNER JOIN sakila.film AS fil
ON fac.film_id = fil.film_id;