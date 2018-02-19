const express = require('express');
const session = require('express-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const path = require('path');


require('dotenv').config()

const app = express();
app.use(bodyParser.json());
app.use(cors());
massive(process.env.CONNECTION_STRING)
    .then(dbInstance => app.set('db', dbInstance));

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Welcome to the Big Show on ${port}`);
});