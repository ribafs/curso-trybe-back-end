SELECT Piece, Price FROM Provides
	WHERE Provider = 'RBT';
SELECT * FROM Provides;
SELECT Provider, Providers.Name, Pieces.Name, Price FROM Provides
	INNER JOIN Pieces ON Pieces.Code = Provides.Piece
	INNER JOIN Providers ON Providers.Code = Provides.Provider
	ORDER BY Price DESC LIMIT 5;
SELECT Providers.Name, Price FROM Provides
	INNER JOIN Providers ON Providers.Code = Provides.Provider
	ORDER BY Price DESC LIMIT 4 OFFSET 2;
SELECT Pieces.Name, Price FROM Provides
	INNER JOIN Pieces ON Pieces.Code = Provides.Piece
    WHERE Provider = 'HAL'
    ORDER BY Price DESC;
SELECT Providers.Name, Provider FROM Provides
	INNER JOIN Providers ON Providers.Code = Provides.Provider
    WHERE Piece = 1;