/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('notes').insert([
    {title: 'test_data', content: 'I wrote note of todays news.', news: '{"source":{"title":"BBC NEWS","url":"https://www.bbc.com/news"}}'},
    {title: 'Sloth home', content: 'Oh my Gosh, my home will be sloth from the news. ', news: '{"source":{"title":"BBC NEWS","url":"https://www.bbc.com/news"}}'},
    {title: 'September is over', content: 'October, actually.', news: '{"source":{"title":"BBC NEWS","url":"https://www.bbc.com/news"}}'}
  ]);
};
