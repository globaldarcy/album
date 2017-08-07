var express = require('express');
var formidable = require('formidable');
var router = express.Router();
var file = require('../models/file');


/*var data = [
    {
        img: "https://imgsa.baidu.com/baike/c0%3Dbaike72%2C5%2C5%2C72%2C24/sign=f3d4063328738bd4d02cba63c0e2ecb3/a2cc7cd98d1001e910616de1be0e7bec55e797fa.jpg",
        content: "1 convallis timestamp"
    },
    {
        img: "https://imgsa.baidu.com/baike/c0%3Dbaike72%2C5%2C5%2C72%2C24/sign=f3d4063328738bd4d02cba63c0e2ecb3/a2cc7cd98d1001e910616de1be0e7bec55e797fa.jpg",
        content: "2 convallis timestamp 2 Donec "
    },
    {
        img: "https://imgsa.baidu.com/baike/c0%3Dbaike72%2C5%2C5%2C72%2C24/sign=f3d4063328738bd4d02cba63c0e2ecb3/a2cc7cd98d1001e910616de1be0e7bec55e797fa.jpg",
        content: "3 convallis timestamp 2 Donec a fermentum nisi."
    },
    {
        img: "https://imgsa.baidu.com/baike/c0%3Dbaike72%2C5%2C5%2C72%2C24/sign=f3d4063328738bd4d02cba63c0e2ecb3/a2cc7cd98d1001e910616de1be0e7bec55e797fa.jpg",
        content: "4 convallis timestamp 2 Donec a fermentum nisi."
    },
    {
        img: "https://imgsa.baidu.com/baike/c0%3Dbaike72%2C5%2C5%2C72%2C24/sign=f3d4063328738bd4d02cba63c0e2ecb3/a2cc7cd98d1001e910616de1be0e7bec55e797fa.jpg",
        content: "5 convallis timestamp 2 Donec a fermentum nisi."
    },
    {
        img: "https://imgsa.baidu.com/baike/c0%3Dbaike72%2C5%2C5%2C72%2C24/sign=f3d4063328738bd4d02cba63c0e2ecb3/a2cc7cd98d1001e910616de1be0e7bec55e797fa.jpg",
        content: "6 convallis timestamp 2 Donec"
    }
];*/
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
/*router.get('/news', function (req, res) {
    res.json(data);
});*/
router.get('/upload', function (req, res, next) {
    file.getAllAlbums(function (err, allAlbums) {
        if(err) {
            next();
        }
        res.render('upload', {
            allAlbums: allAlbums
        })
    });
    //res.redirect("/");
});
router.post('/upload', function (req, res, next) {
    file.upImg(req, res, next);
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
