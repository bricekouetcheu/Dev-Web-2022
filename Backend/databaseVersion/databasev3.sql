SELECT
  C.description,
  U.name,
  C.publisheddate
  
FROM users as U
JOIN comments AS C
  ON U.user_id = C.user_id
JOIN books AS B
  ON B.book_id = C.book_id
  
 WHERE B.book_id='MhNhBgAAQBAJ'
 

INSERT INTO comments ( description ,publisheddate, book_id,  user_id) VALUES ('tres interessant',current_timestamp,'71nDBQAAQBAJ',26);



