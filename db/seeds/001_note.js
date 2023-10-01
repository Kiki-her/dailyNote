/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('note').insert([
    {title: 'りんごの日', content: "今日はりんごをたくさん食べました。朝も昼も夜も食べて、デザートにアップルパイも作りました", news: "https"},
    {title: 'ニュース見た', content: "結構ひどいことになっていてびっくり", news: "https"},
    {title: '9月終わった', content: "もう10月", news: "https"}
  ]);
};
