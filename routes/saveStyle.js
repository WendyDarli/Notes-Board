const express = require('express');
const router = express.Router();
const messages = require('./messagesArray');
const fs = require('fs');

router.get('/', function(req, res, next) {
  res.render('save-style', { title: "New message", messages: messages})

  //click saveBTn and redirect to index
});

module.exports = router;