const express = require('express');
const router = express.Router();
const messages = require('../public/javascripts/messagesArray');
const styles = require('../public/javascripts/styles');

/* GET home page. */

console.log(messages)
router.get('/', function(req, res, next) {
  res.render('index', {messages: messages, styles: styles });
});

module.exports = router;