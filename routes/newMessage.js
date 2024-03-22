const express = require('express');
const router = express.Router();
const messages = require('./messagesArray');
const fs = require('fs');

router.get('/', function(req, res, next) {
  res.render('form', { title: "New message", messages: messages})

  
});

router.post('/', function(req, res) {
  const messageText = req.body.messageText;
  const userName = req.body.userName;

  const newMessage = {"text" : messageText, "user": userName};

  messages.push(newMessage);

  fs.writeFile(__dirname + '/messagesArray.js', 'module.exports = ' + JSON.stringify(messages, null, 2), (err) => {
    if (err) throw err;
});

  res.redirect('/savestyle');
});



module.exports = router;

