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
  file.getAllAlbums(function (err, allAlbums) {
      if(err) {
          next();
      }
      res.render('index', {
          title: 'Express',
          albums: allAlbums
      })
  });
});
router.get('/:albumName', function (req, res, next) {
    file.getAlbumImg(req, res, function (err, allImg) {
        if(err){
            next();
        }
        res.render('album', {
            title: req.params.albumName,
            imgs:allImg
        })
    })
});

module.exports = router;
