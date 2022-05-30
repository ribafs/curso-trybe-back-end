SELECT COUNT(*) FROM sakila.rental;
SELECT * FROM sakila.rental;
# Query + LIMIT quantidade_de_resultados
SELECT * FROM sakila.rental LIMIT 10;
# Query + LIMIT quantidade_de_linhas OFFSET quantidade_de_linhas
SELECT * FROM sakila.rental LIMIT 10 OFFSET 3;
SELECT * FROM actor LIMIT 10 OFFSET 4;