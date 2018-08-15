var express = require('express')
var fs = require('fs')
var router = express.Router()
const mysql = require('mysql2/promise')
const pool = mysql.createPool({
  host: 'localhost',
  user: 'sukamo',
  password: 'suyeehong1121',
  database: 'todoList'
});

router.all('*', function (req, res, next) {
  fs.readFile('./public/data/List.json', function (err, data) {
    res.locals.posts = JSON.parse(data)
    next()
  })
})


/* GET home page. */
router.get('/', function (req, res, next) {
  pool.getConnection()
    .then(conn => {
      const res = conn.query('select * from myList')
      conn.release()
      return res;
    }).then((result) => {
      console.log(result[0])
    }).catch((err) => {
      console.log(err) // any of connection time or query time errors from above
    })
  res.render('index', { data: res.locals.posts });
})

module.exports = router
