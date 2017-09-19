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


router.get('/edit/:id', function(req, res, next) {
  dao.anime.get(req.params.id, function(error, rows, fields) {
    res.render('animes_form', {
      title: 'Edita anime',
      anime: rows[0],
    });
  });
});


router.post('/edit/:id', function(req, res, next) {
  dao.anime.save({
    id: req.params.id,
    nome: req.body.nome,
    episodios: req.body.episodios,
  }, function(err, rows, fields) {
    res.redirect('/animes');
  });
});


router.get('/remove/:id', function(req, res, next) {
  dao.anime.remove(req.params.id, function(err, rows, fields) {
    res.redirect('/animes');
  });
});


module.exports = router;
