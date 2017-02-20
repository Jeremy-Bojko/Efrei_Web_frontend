var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');

const homeController = require('./controllers/home');
const usersController = require('./controllers/usersCtrl'); 
const alliancesController = require('./controllers/alliancesCtrl'); 
const charactersController = require('./controllers/charactersCtrl'); 

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', homeController.index);
app.get('/users', usersController.usersView); 
app.get('/users/:id', usersController.userView); 
app.get('/alliances', alliancesController.alliancesView); 
app.get('/alliances/:id', alliancesController.allianceView); 
app.get('/characters', charactersController.charactersView); 
app.get('/characters/:id', charactersController.characterView); 

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
