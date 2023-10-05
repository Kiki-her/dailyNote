const knex = require("./knex");

module.exports = {
  /**
   * すべてのnoteをGetする
   * @return {Promise<Array>} noteのデータを要素に持つ配列を Promise で返す
   */
    async getAll() {
      const result = await knex("notes").select("*").returning("*");
        return result;
    },

    /**
   * idによって一つの製品をGetする
   * @param {number} id - note id.
   * @return {Promise<Object>} idに合致するnoteデータを Promise で返す
   */
    async getById(id) {
      const result = await knex("notes")
            .select("*")
            .where({
                id,
            })
            .first();
        return result;
    },

    /**
   * 新規noteを作成する
   * @param {Object} noteObj - 追加する新規note
   * @return {Promise<number>} 作成されたnoteの id を Promise で返す
   */
    async create(noteObj) {
      console.log("CREATE", noteObj) //ない
        if(typeof noteObj !== "object") {
      noteObj = JSON.parse(noteObj);
    }
        const result = await knex("notes").returning("*").insert({
            title: noteObj.title,
            content: noteObj.content,
            news: noteObj.news,
        });
        return result;
    },

     /**
   * 既存noteを更新する
   * @param {number} id - 既存noteの一意のid
   * @param {Object} noteObj - 変更するnoteデータ
   * @return {Promise<number>} 更新されたnoteの id を Promise で返す
   */
  async update(id, noteObj) {
    if(typeof noteObj !== "object") {
      noteObj = JSON.parse(noteObj);
    }
    
    const result = await knex("notes")
        .where("id", id)
        .update({
          title: noteObj.title,
          content: noteObj.content
        })
        .returning("*")
        .then((res) => res[0].id);
    return result;

    
  },
   /**
   * 既存のnoteを削除する
   * @param {number} id - 既存の注文の一意のid
   * @return {Promise<number>} 削除されたnoteの id を Promise で返す
   */
   async remove(id) {
    const result = await knex("notes").where("id", id).returning("*").del();
    return result;
  },

}