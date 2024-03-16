const express = require('express');
const router = express.Router();
const messages = require('./messages');

/* GET home page. */

console.log(messages)
router.get('/', function(req, res, next) {
  res.render('index', {messages: messages });
});


module.exports = router;


