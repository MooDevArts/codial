const express = require('express');
const app = express();
const port = 8000;

//cookie parser
const cookieParser = require('cookie-parser');

//middleware
//to read post request
app.use(express.urlencoded({ extended: true }));
//coockie parser
app.use(cookieParser());

//MongoDB
const mongoose = require('./config/mongoose');
//session cookie
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy');

//statics
app.use(express.static('./assets'));
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

//layouts
const expressLayouts = require('express-ejs-layouts');
app.use(expressLayouts);



//view engine ejs
app.set('view engine', 'ejs');
app.set('views', './views');

//session middleware
app.use(session({
    name: 'codial',
    //change secret key in production code
    secret: 'haha',
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (1000 * 60 * 100)
    }
}));

app.use(passport.initialize());
app.use(passport.session());

//router
const router = require('./routes/index')
app.use('/', router);

app.listen(port, function(err){
    if(err){
    console.log("Error in running server", err);
    }

    console.log(`Server running on port ${port}`);
});