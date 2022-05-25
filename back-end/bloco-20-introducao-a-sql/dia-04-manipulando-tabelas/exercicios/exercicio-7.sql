DELETE FROM BoxOffice
WHERE movie_id IN (2, 9);

DELETE FROM Movies
WHERE id IN (2, 9) AND director = 'Andrew Staton';

-- posso usar o comando SET SQL_SAFE_UPDATES = 0; para poder fazer os deletes de forma mais direta
-- isto é, sem precisar usar o id