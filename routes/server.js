const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser');
const favicon = require('serve-favicon');
const PORT = 3000;

const indexRouter = require('./index');
const newMessageRouter = require('./newMessage');
const saveStyleRouter = require('./saveStyle');
const app = express();

// view engine setup
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));


app.use(favicon(path.join(__dirname, '../public/images', 'icon.ico')))

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', indexRouter);
app.use('/new', newMessageRouter);
app.use('/savestyle', saveStyleRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
