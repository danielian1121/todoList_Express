var express = require('express')
var fs = require('fs')
var router = express.Router()

router.all('*', function (req, res, next) {
  fs.readFile('./public/data/List.json', function (err, data) {
    res.locals.posts = JSON.parse(data)
    next()
  })
})


/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { data: res.locals.posts });
})

module.exports = router
