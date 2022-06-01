SELECT m.*, t.*
FROM Pixar.Movies AS m
RIGHT JOIN Pixar.Theater AS t
ON m.theater_id = t.id
ORDER BY t.`name` ASC;