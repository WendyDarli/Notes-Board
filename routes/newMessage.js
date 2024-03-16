var express = require('express');
var router = express.Router();

router.post('/new', function(req, res, next) {
  res.render('form', { title: "New message"})
  messages.push({text: messageText, user: messageUser});
  req.body.messgeText;
  req.body.userName;

  res.redirect('/')
  
});



module.exports = router;
