var express = require('express')
var router = express.Router()

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
  console.log(`${title} + ${content} + ${date}`)
  res.send('respond with a resource')
});

module.exports = router;
