require('./config.js');
var express = require('express');
var session = require('express-session')
var app = express();
var passport = require('passport');
var GitHubStrategy = require('passport-github').Strategy;

passport.use(new GitHubStrategy({
    clientID: GITHUB_CLIENT_ID,
    clientSecret: GITHUB_CLIENT_SECRET,
    callbackURL: 'http://localhost:3000/auth/github/callback'
  },
  function(accessToken, refreshToken, profile, done) {
    return done(null, profile);
  }
));

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});
var api = require('./routes/routes.js');
var server = app.listen(process.env.PORT || 3000, function() {
  console.log('Server is listening on ', server.address().port);
});

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }

  res.send(401);
}

app.use('/', express.static(__dirname + '/public'));
app.use(session({
  secret: 'keyboard cat',
  saveUninitialized: true,
  resave: true
}));
app.use(passport.initialize());
app.use(passport.session());

app.get('/auth/github', passport.authenticate('github'));

app.get('/auth/github/callback',
  passport.authenticate('github', {
    failureRedirect: '/#/signin'
  }),
  function(req, res) {
    res.redirect('/#/');
  });

app.use('/api', ensureAuthenticated);
app.use('/api', api);

module.exports = app;
