# Schema Design

`pk` = Primary Key

## note Table

Table note {
    id id [pk]
    title varchar(32) [not null]
    content text
}

エラーが解消できなかったため、psqlで入力
``
CREATE TABLE "note" (id serial PRIMARY KEY, title varchar NOT NULL, content text, news text);
``