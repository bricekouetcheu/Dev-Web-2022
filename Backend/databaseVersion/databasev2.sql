CREATE TABLE books(
	book_id  VARCHAR(20) PRIMARY KEY,
	title VARCHAR ( 100 ) NOT NULL,
	description VARCHAR ( 200 ) NOT NULL,
    ISBN VARCHAR (60 ) NOT NULL,
	imageLink VARCHAR ( 100 ) NOT NULL,
	publishedDate VARCHAR (20) NOT NULL,
	authors varchar (100) NOT null
	
);


CREATE TABLE comments(
	id_comment PRIMARY KEY,
	 description VARCHAR ( 100 ) NOT NULL,
	publishedDate timestamp NOT NULL,
	book_id VARCHAR(20),
	user_id INT,
	CONSTRAINT fk_users
      FOREIGN KEY(user_id ) 
	  REFERENCES users(user_id )
	CONSTRAINT fk_books
      FOREIGN KEY(book_id   ) 
	  REFERENCES users(book_id  )
	
	
);


INSERT INTO books ( book_id ,title ,isbn, imagelink , publisheddate , authors) VALUES ('71nDBQAAQBAJ','javascript for kids','cdqs','http://books.google.com/books/publisher/content?id=kmEoDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE73PxwuB2BpBL2DkLuEDs-sYB5iaLtvyrP574v1XwHvsNvQj5M2qSDeNu1qCw-BIbxpYmnvhSGSq2R97Xphpq5KojJrHDIFpELcg0Xf33HmjdbQkJ5uKn2aP76QFjMDcrbUfrULu&source=gbs_api','2017-10-10','Nick Morgan');


INSERT INTO comments ( description ,publisheddate, book_id,  user_id) VALUES ('tres interessant',current_timestamp,'71nDBQAAQBAJ',26);



