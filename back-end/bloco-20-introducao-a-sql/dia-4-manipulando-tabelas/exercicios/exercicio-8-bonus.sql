SET SQL_SAFE_UPDATES = 0;

UPDATE BoxOffice
SET rating = (
CASE WHEN domestic_sales > 400000000 THEN 9.0
ELSE rating
END);