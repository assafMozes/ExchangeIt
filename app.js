var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require ('express-session');

var index = require('./routes/index');
var users = require('./routes/users');
var objects = require('./routes/objects');
var proposals = require('./routes/proposals');
// var createData = require('./routes/createData');

var app = express();

var mysql = require('mysql');
var con = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "filuka12",
    database: "data1"
})
con.connect(function (err) {
  if (err) throw err;
  console.log('connected')
})
// var sql = 'SELECT * FROM users'
// con.query(sql, function (err, result) {
//     if (err) throw err;
//     user = result;
//     console.log(result)
// })


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({secret: 'assafmozes', cookie: { maxAge: 10000000 }, resave:true, saveUninitialized:true }));

app.use('/users', users);
app.use('/objects', objects);
app.use('/proposals', proposals);
// app.use('/createData', createData);
app.use('/', index);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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

module.exports = app;