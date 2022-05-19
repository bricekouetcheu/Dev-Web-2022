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



CREATE TABLE IF NOT EXISTS public.comments
(
    id_comment integer NOT NULL DEFAULT nextval('comments_id_comment_seq'::regclass),
    description character varying(100) COLLATE pg_catalog."default" NOT NULL,
    publisheddate timestamp without time zone NOT NULL,
    book_id character varying(20) COLLATE pg_catalog."default" NOT NULL,
    "parentID" integer,
    user_id integer,
    CONSTRAINT comments_pkey PRIMARY KEY (id_comment),
    CONSTRAINT fk_comments FOREIGN KEY ("parentID")
        REFERENCES public.comments (id_comment) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID,
    CONSTRAINT fk_user FOREIGN KEY (user_id)
        REFERENCES public.users (user_id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.comments
    OWNER to postgres;