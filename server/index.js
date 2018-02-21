const express = require('express');
const session = require('express-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const path = require('path');

const strategy = require('./strategy');
const checkForSession = require('./middlewares/checkForSession');
const ac = require('./Controllers/authController');

require('dotenv').config();

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(session({
    secret: "process.env.SECRET_SESSION",
    resave: false,
    saveUninitialized: true
}));
app.use(checkForSession);
app.use(passport.initialize());
app.use(passport.session());
passport.use(strategy);

passport.serializeUser((user,done) => {
    //console.log('user.first')
    done(null,
        {
           id: user.id,
           firstName: user.first || '',
           lastName: user.last || '',
           picture: 'https://robohash.org/me'
        });
});

passport.deserializeUser((obj,done) => {
    done(null,obj);
})

massive(process.env.CONNECTION_STRING)
    .then(dbInstance => app.set('db', dbInstance))
    .catch(err => console.log(err));

app.get( '/api/auth/login', 
    passport.authenticate('auth0', 
        { successRedirect: 'http://localhost:3000/#/dashboard', failureRedirect: '/profile', failureFlash: true }
    )
);

app.get('/api/auth/setuser', ac.read)

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Welcome to the Big Show on ${port}`);
});