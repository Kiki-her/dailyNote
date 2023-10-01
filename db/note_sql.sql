BEGIN TRANSACTION;

INSERT INTO note (title, content, news) VALUES
('りんごの日', "今日はりんごをたくさん食べました。朝も昼も夜も食べて、デザートにアップルパイも作りました", "https"),
('ニュース見た', "結構ひどいことになっていてびっくり", "https"),
('9月終わった',  "もう10月",  "https");

COMMIT;

