var database = require('./database');


module.exports = {
  anime: {
    list: function(callback) {
      var conn = database.init();
      conn.query('SELECT * FROM anime ORDER BY nome ASC', callback);
    },
    get: function(id, callback) {
      var conn = database.init();
      conn.query(
        'SELECT * FROM anime WHERE id = ? LIMIT 1',
        [id],
        callback
      );
    },
    save: function(anime, callback) {
      var conn = database.init();
      if (!anime.id) {
        conn.query(
          'INSERT INTO anime (nome, episodios) VALUES (?, ?)',
          [anime.nome, anime.episodios],
          callback
        );
      } else {
        conn.query(
          'UPDATE anime SET nome = ?, episodios = ? WHERE id = ?',
          [anime.nome, anime.episodios, anime.id],
          callback
        )
      }
    },
    remove: function(id, callback) {
      var conn = database.init();
      conn.query('DELETE FROM anime WHERE id = ?', [id], callback);
    },
  },
};
