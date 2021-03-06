const express = require('express');
const session = require('express-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const path = require('path');

const strategy = require('./strategy');
//const checkForSession = require('./middlewares/checkForSession');
const ac = require('./Controllers/authController');

const port = process.env.PORT || 3001;
const app = express();

require('dotenv').config();

massive(process.env.CONNECTION_STRING)
    .then(dbInstance => {
        console.log('this is connected')
        app.set('db', dbInstance)})
    .catch(err => console.log(err));


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

//add in code to connect to zeit

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

//Authorization Endpoints
app.get( '/api/auth/login',
    passport.authenticate('auth0', { 
        successRedirect: '/api/auth/setUser',
        failureRedirect: '/profile', 
        failureFlash: true 
}));

app.get('/api/auth/setUser', passport.authenticate('auth0'), (req,res, done) => {
    console.log("req.s.p.u",req.session.passport.user);//this gives me what was set on the middleware for user and id
    let passportUser = req.session.passport.user;
    const dbInstance = app.get('db');

    dbInstance.User.read_user([passportUser.id])
        .then(user => {
            console.log('user: ', user)
            if(user.length && user[0].user_id){
                return done(null, user);
            } else{
                dbInstance.User.create_user([passportUser.id, 'https://robohash.org/me'])
                .then(user => {
                    console.log('User created in db: ',user);
                    //console.log('profile, ', profile)
                    return done(null, user)
                })
            }
        })
    res.redirect('http://localhost:3000/#/dashboard')//this works
});

app.get('/api/auth/authenticated', (req,res) => {
    if(req.session.passport.user){
        res.status(200).send(req.session.passport.user)
    } else {
        res.status(403)
    }
})


app.listen(port, () => {
    console.log(`Welcome to the Big Show on ${port}`);
});