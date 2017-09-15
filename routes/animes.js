var express = require('express');
var router = express.Router();
var dao = require('../utils/dao');


router.get('/', function(req, res, next) {
  dao.anime.list(function(error, rows, fields) {
    res.render('animes_list', {
      title: 'Listagem de animes',
      animes: rows,
    });
  });
});


module.exports = router;
