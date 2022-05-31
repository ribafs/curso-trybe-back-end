    SELECT rating, AVG(length)
    FROM sakila.film
    GROUP BY rating;
    
	SELECT rating, AVG(length)
    FROM sakila.film
    GROUP BY rating
    HAVING AVG(length) BETWEEN 115.0 AND 121.50;
    
	SELECT rating, SUM(replacement_cost)
    FROM sakila.film
    GROUP by rating;
    
	SELECT rating, SUM(replacement_cost) AS `total do custo de substituição`
    FROM sakila.film
    GROUP by rating
    HAVING `total do custo de substituição` > 3950.50
    ORDER BY `total do custo de substituição`;