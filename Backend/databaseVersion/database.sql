CREATE DATABASE "Dazibao"
    WITH 
    OWNER = postgres
    ENCODING = 'UTF8'
    CONNECTION LIMIT = -1;



CREATE TABLE users(
	user_id serial PRIMARY KEY,
	name VARCHAR ( 50 ) NOT NULL,
    surname VARCHAR ( 50 ) NOT NULL,
	password VARCHAR ( 50 ) NOT NULL,
	email VARCHAR ( 255 ) UNIQUE NOT NULL,
    last_login TIMESTAMP 
);

INSERT INTO users( name, surname, password, email) VALUES ('brice','ronald','titi','cdcd@gmail.com');