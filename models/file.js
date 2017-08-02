/**
 * Created by Shawn on 2017/7/30.
 */
var fs = require('fs');
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
    }
};
