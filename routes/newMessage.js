const express = require('express');
const router = express.Router();
const messages = require('./messagesArray');


router.get('/', function(req, res, next) {
  res.render('form', { title: "New message", messages: messages})

  
});

router.post('/', function(req, res) {
  const messageText = req.body.messageText;
  const userName = req.body.userName;

  messages.push({text: messageText, user: userName});

  
  res.redirect('/');
});



module.exports = router;

