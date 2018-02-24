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

var corsOptions = {
    origin: 'http://localhost:3000'
}
require('dotenv').config();

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(session({
    secret: "process.env.SECRET_SESSION",
    resave: false,
    saveUninitialized: true,
}));
//app.use(checkForSession);
app.use(passport.initialize());
app.use(passport.session());
passport.use(strategy);

passport.serializeUser((user,done) => {
    console.log(user.name)
    done(null,
        {
           id: user.id,
           firstName: user.name.givenName || '',
           lastName: user.name.familyName || '',
           picture: 'https://robohash.org/me'
        });
});

passport.deserializeUser((obj,done) => {
    done(null,obj);
})

massive(process.env.CONNECTION_STRING)
    .then(dbInstance => app.set('db', dbInstance))
    .catch(err => console.log(err));

//Authorization Endpoints
app.get( '/api/auth/login',
    passport.authenticate('auth0', { 
        successRedirect: '/api/auth/setUser',
        failureRedirect: '/profile', 
        failureFlash: true 
}));

app.get('/api/auth/setUser', passport.authenticate('auth0'), (req,res) => {
    console.log(req.session.passport.user);//this gives me what was set on the middleware for user and id
    res.redirect('http://localhost:3000/#/dashboard')//this works
});

app.get('/api/auth/authenticated', (req,res) => {
    if(req.session.passport.user){
        res.status(200).send(req.session.passport.user)
    } else {
        res.status(403)
    }
})

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Welcome to the Big Show on ${port}`);
});