

CREATE TABLE notes (id serial PRIMARY KEY, title varchar NOT NULL, content text, news text);

INSERT INTO notes (title, content, news) VALUES ('test_data', 'I wrote note of todays news.', '{"source":{"title":"BBC NEWS","url":"https://www.bbc.com/news"}}');
INSERT INTO notes (title, content, news) VALUES ('Sloth home', 
'Oh my Gosh, my home will be sloth from the news. ', '{"source":{"title":"BBC NEWS","url":"https://www.bbc.com/news"}}');
INSERT INTO notes (title, content, news) VALUES ('September is over',  'October, actually.',  '{"source":{"title":"BBC NEWS","url":"https://www.bbc.com/news"}}');



