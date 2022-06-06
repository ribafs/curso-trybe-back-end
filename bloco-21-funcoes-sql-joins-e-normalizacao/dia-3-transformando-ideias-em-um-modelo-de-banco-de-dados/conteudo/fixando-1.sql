CREATE SCHEMA IF NOT EXISTS normalization;
USE normalization;

CREATE TABLE Funcionarios (
funcionario_id INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(50) NOT NULL,
sobrenome VARCHAR(50) NOT NULL,
email VARCHAR(100),
telefone VARCHAR(20),
data_cadastro TIMESTAMP
);

CREATE TABLE Setores (
setor_id INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(50) NOT NULL
);

CREATE TABLE Setor_Funcionarios (
funcionario_id INTEGER,
setor_id INTEGER,
FOREIGN KEY (funcionario_id) REFERENCES Funcionarios (funcionario_id),
FOREIGN KEY (setor_id) REFERENCES Setores (setor_id)
);

INSERT INTO Funcionarios (nome, sobrenome, email, telefone, data_cadastro)
VALUES
('Joseph', 'Rodrigues', 'jo@gmail.com', '(35)998552-1445', '2020-05-05 08:50:25'),
('Andre', 'Freeman', 'andre1990@gmail.com', '(47)99522-4996', '2020-02-05 00:00:00'),
('Cintia', 'Durval', 'cindy@outlook.com', '(33)99855-4669', '2020-05-05 10:55:35'),
('Fernanda', 'Mendes', 'fernandamendes@yahoo.com', '(33)99200-1556', '2020-05-05 11:45:40');

INSERT INTO Setores (nome)
VALUES
('Administração'),
('Vendas'),
('Operacional'),
('Estratégico'),
('Marketing');

INSERT INTO Setor_Funcionarios (funcionario_id, setor_id)
VALUES
(1, 1),
(1, 2),
(2, 3),
(3, 4),
(3, 2),
(4, 5);