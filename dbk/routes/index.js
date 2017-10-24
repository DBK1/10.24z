var express = require('express');
var router = express.Router();
var fs=require("fs");
var n=0;
/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/abc', function(req, res, next) {
  fs.readFile("a.jade","utf8",function (err,data) {
    n++;
    res.render('a', { w2:n });
    fs.writeFile("views/a.txt","第"+n+"次访问页面",function (err,data) {
      console.log(data);
    })
  })
});
module.exports = router;
