const express = require('express');
const session = require('express-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const path = require('path');

const strategy = require('./strategy');
const checkForSession = require('./middlewares/checkForSession');


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
    console.log(user)
    done(null,
        {
           id: user.id,
           firstName: user.firstName || '',
           lastName: user.lastName || '',
           picture: 'https://robohash.org/me'
        });
});

passport.deserializeUser((obj,done) => {
    done(null,obj);
})

massive(process.env.CONNECTION_STRING)
    .then(dbInstance => app.set('db', dbInstance))
    .catch(err => console.log(err));

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Welcome to the Big Show on ${port}`);
});