const express = require('express');
const router = express.Router();



const messages = [
  {
    "text": "Hi there!",
    "user": "Amando"

  },
  {
    "text": "Hello World!",
    "user": "Charles"

  }
]


/* GET home page. */

console.log(messages)
router.get('/', function(req, res, next) {
  res.render('index', {messages: messages });
});



router.get('/new', function(req, res, next) {
  res.render('form', { title: "New message", messages: messages})

  
});

router.post('/new', function(req, res) {
  const messageText = req.body.messageText;
  const userName = req.body.userName;

  messages.push({text: messageText, user: userName});

  console.log(messages);
  res.redirect('/');
});



module.exports = router;




