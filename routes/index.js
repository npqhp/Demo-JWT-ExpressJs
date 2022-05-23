var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken')

/* GET home page. */
router.get('/', function(req, res, next) {
  if (req.cookies.token === null) return res.redirect('/login')
  let result;
  try {
    result = jwt.verify(req.cookies.token, 'id');
    next()
  } catch (err) {
    return res.redirect('/login')
  }
  if (result.id === 0) return res.render('index', { title: 'Trang của Admin' });
  if (result.id === 1) return res.render('index', { title: 'Trang của Khách' });
});

module.exports = router;
