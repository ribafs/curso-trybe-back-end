    DROP SCHEMA IF EXISTS Trybeflix;
    CREATE SCHEMA Trybeflix;
    USE Trybeflix;

    -- Primeiro criamos a tabela Actor
    CREATE TABLE Actor(
        ActorId INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        Name VARCHAR(255) NOT NULL
    );

    -- E a tabela Film
    CREATE TABLE Film(
        FilmId INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        Name VARCHAR(255) NOT NULL
    );

    -- E por fim, a tabela film_actor com a relação N:N

    CREATE TABLE Film_Actor(
	    ActorId INTEGER,
	    FilmId INTEGER,
	    CONSTRAINT PRIMARY KEY(ActorId, FilmId),
        FOREIGN KEY (ActorId) REFERENCES Actor (ActorId),
        FOREIGN KEY (FilmId) REFERENCES Film (FilmId)
    );