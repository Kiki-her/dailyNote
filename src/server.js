require("dotenv").config();
const express = require('express');
const PORT = process.env.PORT || 3001;
const API_KEY = process.env.API_KEY;
const knex = require('knex');
const app = express();
const noteController = require("./note.modal.js");
const { default: axios } = require('axios');


/*
  下の一行によって、受信されるリクエストボディに 'application/json'というContent-Type headerがあるときにJSONをパースするミドルウェアが追加される。
  このミドルウェアが使われるときは、JSON.parseやJSON.stringifyをしなくてもよい。
*/
app.use(express.json());

// 以下はフォームデータのパースのためのもの (application/x-www-form-urlencoded)
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
   res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT, PATCH, DELETE");
   res.setHeader("Access-Control-Allow-Headers", "Content-Type")
  next();
});

// 以下はアプリのフロントエンドのためのテンプレートを設定している。
app.set("views", `${__dirname}/templates`);
app.set("view engine", "ejs");

/*
  以下によってパブリックディレクトリからスタティックファイル (html, css, etc.) をサーブできる。
*/
app.use(express.static("public"));


app.get('/notes', async (req, res) => {
    // use the knex variable above to create dynamic queries
    const allNotes = await noteController.getAll();
    res.set({'Access-Control-Allow-Origin': '*' });
    res.send(allNotes);
  });

app.get("/notes/:id", async(req, res) => {
    const targetNote = await noteController.getById(req.params.id);
    res.set({'Access-Control-Allow-Origin': '*' });
    res.send(targetNote);
})

app.post("/create", async(req, res) => {
    const newObj = req.body;
    await noteController.create(newObj);
    res.set({'Access-Control-Allow-Origin': '*' });
    res.send({message: "new note"});
})

app.delete("/delete/:id", async(req, res) => {
    await noteController.remove(req.params.id);
    res.set({'Access-Control-Allow-Origin': '*' });
    res.send({message: "Deleted"});
})

app.put("/update/:id", async(req, res) => {
    const id = req.params.id;
    const newObj = req.body; 
    await noteController.update(id, newObj);
    res.set({'Access-Control-Allow-Origin': '*' });
    res.send({message: "Updated"});
})

app.get("/news", async (req, res) => {
  try{
   res.set({'Access-Control-Allow-Origin': '*' });
  const response = await axios.get(`https://newsapi.org/v2/top-headlines`, {
    params: {
      apiKey : API_KEY,
      pageSize: 1,
      sources: "bbc-news"
    },
  });
  const newData = response.data.articles;
  res.send(newData);
} catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
})

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});


