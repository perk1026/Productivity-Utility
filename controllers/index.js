var express = require('express');
var router = express.Router();
var path = require('path');

/* Open JSON file and parse it as JSON objects */
var fs = require('fs');
var str_json_path = path.join(__dirname, '../public/res/strings.json');
var view_strs = fs.readFileSync(str_json_path, 'utf8');
var index_strs_obj = JSON.parse(view_strs);

/* Open JS file including function handler used in index.ejs */
/* To templating this JS file, here use ejs compiler to replace EJS partial string */
var ejs = require('ejs');
var react_path = path.join(__dirname, '../public/js/index_react.js');
var react = fs.readFileSync(react_path, 'utf8');
var compileres = ejs.compile(react, {filename:react_path})(index_strs_obj);

router.get('/js/index_react.pjs', function(req, res){
    res.send(compileres);
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', index_strs_obj);
});

module.exports = router;
