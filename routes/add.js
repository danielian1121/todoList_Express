var express = require('express')
var router = express.Router()
var mysql = require('../models/sqlPool').pool

/* GET users listing. */
router.get('/', function (req, res, next) {
  //res.send('respond with a resource')
  res.render('addList/addLayout')
});
router.post('/', function (req, res, next) {
  //res.render('addList/addLayout')
  let body = req.body
  let title = body.title
  let content = body.content
  let date = body.date
  addToList(title, content, date, res)
  //res.send('respond with a resource')
});

var addToList = function (title, content, date, res) {
  let sql = {
    title: title,
    content: content,
    time: date
  }
  mysql.getConnection()
    .then(conn => {
      const res = conn.query('insert into myList set ?', sql)
      conn.release()
      return res
    }).then(result => {
      res.redirect('/')
    }).catch(err => {
      console.log(err)
    })
}

module.exports = router;
