SELECT * FROM Fornecimentos
INNER JOIN Pecas ON Pecas.code = Fornecimentos.peca
WHERE Preco > 15 AND Preco < 40
ORDER BY Preco;