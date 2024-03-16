const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

const indexRouter = require('./index');
const newMessageRouter = require('./newMessage');

app.use(express.static(path.join(__dirname, '../public')));

app.set("view engine", "pug");

app.use('/', indexRouter);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
