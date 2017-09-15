var database = require('./database');


module.exports = {
  anime: {
    list: function(callback) {
      var conn = database.init();
      conn.query('SELECT * FROM anime ORDER BY nome ASC', callback);
    },
  },
};
