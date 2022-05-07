CREATE TABLE books(
	book_id  VARCHAR(20) PRIMARY KEY,
	title VARCHAR ( 255 ) NOT NULL,
	description VARCHAR ( 500 ),
    ISBN VARCHAR (60 ) ,
	imageLink VARCHAR ( 500 ),
	publishedDate VARCHAR (20) ,
	authors varchar (500)
	
);


CREATE TABLE comments(
	id_comment VARCHAR(20) PRIMARY KEY,
	 description VARCHAR ( 100 ) NOT NULL,
	publishedDate timestamp NOT NULL,
	book_id VARCHAR(20),
	user_id INT,
	CONSTRAINT fk_users
      FOREIGN KEY(user_id ) 
	  REFERENCES users(user_id),
	CONSTRAINT fk_books
      FOREIGN KEY(book_id) 
	  REFERENCES books(book_id) 	

	
);



INSERT INTO books ( book_id ,title ,isbn, imagelink , publisheddate , authors) VALUES ('71nDBQAAQBAJ','javascript for kids','cdqs','http://books.google.com/books/publisher/content?id=kmEoDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE73PxwuB2BpBL2DkLuEDs-sYB5iaLtvyrP574v1XwHvsNvQj5M2qSDeNu1qCw-BIbxpYmnvhSGSq2R97Xphpq5KojJrHDIFpELcg0Xf33HmjdbQkJ5uKn2aP76QFjMDcrbUfrULu&source=gbs_api','2017-10-10','Nick Morgan');


INSERT INTO comments (id_comment, description ,publisheddate, book_id,  user_id) VALUES ('1','tres interessant',current_timestamp,'71nDBQAAQBAJ',3);



