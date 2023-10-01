const knex = require("./knex");

module.exports = {
  /**
   * すべてのnoteをGetする
   * @return {Promise<Array>} noteのデータを要素に持つ配列を Promise で返す
   */
    getAll() {
        return knex("notes").select();
    },

    /**
   * idによって一つの製品をGetする
   * @param {number} id - note id.
   * @return {Promise<Object>} idに合致するnoteデータを Promise で返す
   */
    getById(id) {
        return knex("notes")
            .select()
            .where({
                id,
            })
            .first();
    },

    /**
   * 新規noteを作成する
   * @param {Object} noteObj - 追加する新規note
   * @return {Promise<number>} 作成されたnoteの id を Promise で返す
   */
    create(noteObj) {
        return knex("notes").returning("id").insert({
            title: noteObj.title,
            content: noteObj.content,
            news: noteObj.news,
        });
    },

     /**
   * 既存noteを更新する
   * @param {number} id - 既存noteの一意のid
   * @param {Object} noteObj - 変更するnoteデータ
   * @return {Promise<number>} 更新されたnoteの id を Promise で返す
   */
  update(id, noteObj) {
    return knex("notes")
      .where("id", id)
      .update(noteObj)
      .returning("id")
      .then((res) => res[0].id);
  },
   /**
   * 既存のnoteを削除する
   * @param {number} id - 既存の注文の一意のid
   * @return {Promise<number>} 削除されたnoteの id を Promise で返す
   */
   remove(id) {
    return knex("notes").where("id", id).returning("id").del();
  },

}