SELECT t.*, m.*
FROM Pixar.Movies AS m
LEFT JOIN Pixar.Theater AS t
ON m.theater_id = t.id
ORDER BY t.`name` ASC;