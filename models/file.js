/**
 * Created by Shawn on 2017/7/30.
 */
var fs = require('fs');
var formidable = require('formidable');
var path = require("path");
/*var getAllAlbums = function (callback) {
    fs.readdir("./upload", function (err, files) {
        // var allAlbums = [];
        // console.log(files);
        // (function iterator(i) {
        //     if(i === files.length){
        //         console.log(allAlbums);
        //         return allAlbums;
        //     }
        //     fs.stat("./upload/" + files[i], function (err, stats) {
        //         if(stats.isDirectory()){
        //             allAlbums.push(files[i]);
        //         }
        //         iterator(i + 1);
        //     })
        // })(0);
        //return files;
        callback(files);
    });
};

module.exports = getAllAlbums;*/

module.exports = {
    getAllAlbums : function (callback) {
        fs.readdir("./upload", function (err, files) {
            if(err){
                callback(err)
            }
            callback(null, files);
        });
    },
    getAlbumImg : function (req, res, callback) {
        var path = req.params.albumName;
        fs.readdir("./upload/" + path, function (err, files) {
            if(err){
                callback(err)
            }
            callback(null, files);
        });
    },
    upImg : function (req, res, next) {
        // parse a file upload
        var form = new formidable.IncomingForm();
        form.uploadDir = "./upload/";

        form.parse(req, function(err, fields, files) {
            //console.log(files);
            if(err){
                next();
            }
            var size = parseInt(files.image.size);
            if(size > 51200){
                res.end("图片大于1MB");
                fs.unlink(files.image.path);
                return;
            }
            var date = Date.now();
            var ran = parseInt(Math.random() * 89999 + 10000);
            var extName = path.extname(files.image.name);
            var folder = fields.folder;
            var oldPath = files.image.path;
            var newPath = "./upload/" + folder + "/" + date + ran + extName;
            form.on('file', function(name, file) {
                console.log(name);
                console.log(file);
            });
            fs.rename(oldPath, newPath, function (err) {
                if(err){
                    return res.rend('改名失败');
                }
                return res.redirect('/');
            });
        });
        return;
    }
};
