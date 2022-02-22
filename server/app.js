var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require("cors");

// To Check SQL Connection
// const mysql = require("mysql2");

// const connection = mysql.createConnection({
//   host: "localhost",
//   port: 3306,
//   database: "tracker",
//   user: "root",
//   password: "chennurians21"
// });

// connection.connect((err) => {
//   if(err) {
//     console.log("error occured while connecting to DB");
//   } else {
//     console.log("connection created with Mysql successfully");
//   }
// });

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
const port = process.env.PORT || 8080;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/fetchManagers', indexRouter);
app.use('/skills', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500).json({'message': err.message});

  return;
});

app.listen(port, () => console.log('API server started on: ' + port));

module.exports = app;
