const express = require('express');
const router = express.Router();
const styles = require('../public/javascripts/styles');
const messages = require('../public/javascripts/messagesArray');
const fs = require('fs');

router.use(express.json());

router.get('/', function(req, res, next) {
  res.render('save-style', { messages: messages, styles: styles });
});

router.put('/', (req, res) => {
  const { index, top, left, backgroundColor, backgroundImage, boxShadow, transform } = req.body;

  //get new style
  const newStyle = {
    "top": top,
    "left": left,
    "background-color": backgroundColor,
    "background-image": backgroundImage,
    "boxShadow": boxShadow,
    "transform": transform,
    "disabled": true
  };

  styles[index] = newStyle;
  
  fs.writeFile(__dirname + '../public/javascripts/styles.js', 'const styles = ' + JSON.stringify(styles, null, 2) + ';\n\nmodule.exports = styles;', (err) => {
    if (err) {
      console.error('Failed to save styles:', err);
      return res.status(500).send('Failed to save styles');
    }
    
    res.send("success");
  });
});

module.exports = router;