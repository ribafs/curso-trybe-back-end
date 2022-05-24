SELECT * FROM Fornecimentos;
SELECT * FROM Pecas;

SELECT Pecas.name, Fornecimentos.Preco, Fornecimentos.Fornecedor FROM Fornecimentos
INNER JOIN Pecas ON Pecas.code = Fornecimentos.peca
WHERE Fornecedor LIKE '%n%';