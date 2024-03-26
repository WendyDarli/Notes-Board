const express = require('express');
const router = express.Router();
const messages = require('../public/javascripts/messagesArray');
const styles = require('../public/javascripts/styles')
const fs = require('fs');

router.get('/', function(req, res, next) {
  res.render('form', { title: "New message", messages: messages })
});

function addMessage(req, res, next) {
  const messageText = req.body.messageText;
  const userName = req.body.userName;
  const newMessage = { "text": messageText, "user": userName };

  messages.push(newMessage);

  fs.writeFile(__dirname + '/../public/javascripts/messagesArray.js', 'const message = ' + JSON.stringify(messages, null, 2) + ';\n\nmodule.exports = message;', (err) => {
    if (err) {
      console.error('Failed to save messages:', err);
      return res.status(500).send('Failed to save messages');
    }
    console.log('Messages saved to messagesArray.js');
    next();
  });
}



function addDefaultStyle(req, res) {
  const defaultStyle = {
    "top": "164",
    "left": "64",
    "background-color": "pink",
    "background-image": "linear-gradient(rgb(251, 165, 180), pink)",
    "box-shadow": "linear-gradient(rgb(251, 165, 180), pink)",
    "transform": "0"
  };

  styles.push(defaultStyle);

  fs.writeFile(__dirname + '/../public/javascripts/styles.js', 'const styles = ' + JSON.stringify(styles, null, 2) + ';\n\nmodule.exports = styles;', (err) => {
    if (err) {
      console.error('Failed to save default style:', err);
      return res.status(500).send('Failed to save default style');
    }

    console.log('Default style saved to styles.js');
    res.redirect('/savestyle');
  });
}

router.post('/', addMessage, addDefaultStyle);

module.exports = router;