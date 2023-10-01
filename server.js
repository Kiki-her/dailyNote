const express = require('express');
const PORT = process.env.PORT || 3001;
const knex = require('./src/knex.js');
const app = express();
const noteController = require("./src/note.modal.js");


/*
  下の一行によって、受信されるリクエストボディに 'application/json'というContent-Type headerがあるときにJSONをパースするミドルウェアが追加される。
  このミドルウェアが使われるときは、JSON.parseやJSON.stringifyをしなくてもよい。
*/
app.use(express.json());

// 以下はフォームデータのパースのためのもの (application/x-www-form-urlencoded)
app.use(express.urlencoded({ extended: true }));

// 以下はアプリのフロントエンドのためのテンプレートを設定している。
app.set("views", `${__dirname}/templates`);
app.set("view engine", "ejs");

/*
  以下によってパブリックディレクトリからスタティックファイル (html, css, etc.) をサーブできる。
*/
app.use(express.static(path.join(__dirname, "public")));


app.get('/notes', async (req, res) => {
    // use the knex variable above to create dynamic queries
    const allNotes = await noteController.getAll();
    res.send(allNotes);
  });

app.get("/notes/:id", async(req, res) => {
    const targetNote = await noteController.getById(req.params.id);
    res.send(targetNote);
})

app.post("/create", async(req, res) => {
    const newObj = req.body.newObj;
    await noteController.create(newObj);
    res.send("new note");
})

app.delete("/delete/:id", async(req, res) => {
    await noteController.remove(req.params.id);
    res.send("delete note");
})

app.patch("/update/:id", async(req, res) => {
    const id = req.params.id;
    const newObj = req.body.newObj;
    await noteController.update(id, newObj);
    res.send("Updated");
})

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});


