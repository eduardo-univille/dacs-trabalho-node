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


router.get('/add', function(req, res, next) {
  res.render('animes_form', {
    title: 'Adiciona anime',
  });
});


router.post('/add', function(req, res, next) {
  dao.anime.save(req.body, function(error, rows, fields) {
    res.redirect('/animes');
  });
});


module.exports = router;
