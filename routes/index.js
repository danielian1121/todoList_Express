var express = require('express')
var fs = require('fs')
var router = express.Router()
var mysql = require('../models/sqlPool').pool


router.all('*', function (req, res, next) {
  fs.readFile('./public/data/List.json', function (err, data) {
    //console.log(data)
    res.locals.posts = JSON.parse(data)
    //console.log(res.locals.posts)
    next()
  })
})


/* GET home page. */
router.get('/', function (req, res, next) {
  mysql.getConnection()
    .then(conn => {
      const res = conn.query('select * from myList')
      conn.release()
      return res;
    }).then((result) => {
      res.render('index/indexLayout', { data: result[0] })
      //console.log(result[0])
    }).catch((err) => {
      console.log(err) // any of connection time or query time errors from above
    })

})

module.exports = router
