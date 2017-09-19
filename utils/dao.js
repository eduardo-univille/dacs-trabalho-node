var database = require('./database');


module.exports = {
  anime: {
    list: function(callback) {
      var conn = database.init();
      conn.query('SELECT * FROM anime ORDER BY nome ASC', callback);
    },
    save: function(anime, callback) {
      var conn = database.init();
      conn.query(
        'INSERT INTO anime (nome, episodios) VALUES (?, ?)',
        [anime.nome, anime.episodios],
        callback
      );
    },
  },
};
