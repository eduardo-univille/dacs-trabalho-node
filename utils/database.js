var mysql = require('mysql');


var init = function() {
  var databaseURL = process.env.DATABASE_URL || 'mysql://root:univille@localhost/dacsanimes';
  var conn = mysql.createConnection(databaseURL);

  conn.connect(function(error) {
    if (error) {
      console.log('Erro ao conectar no banco de dados!!!');
    }
  });

  return conn;
};


module.exports = {
  init: init,
};
