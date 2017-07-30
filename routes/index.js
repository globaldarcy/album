var express = require('express');
var router = express.Router();
var file = require('../models/file');

/* GET home page. */
router.get('/', function(req, res, next) {
  /*res.render('index', {
      title: 'Express',
      albums: file(function (allAlbums) {
          return allAlbums;
      })
  });*/
  file(function (allAlbums) {
      res.render('index', {
          title: 'Express',
          albums: allAlbums
      })
  })
});

module.exports = router;
