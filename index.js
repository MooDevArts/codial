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

//statics
app.use(express.static('./assets'));
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

//layouts
const expressLayouts = require('express-ejs-layouts');
app.use(expressLayouts);

//router
const router = require('./routes/index')
app.use('/', router);

//view engine ejs
app.set('view engine', 'ejs');
app.set('views', './views');

app.listen(port, function(err){
    if(err){
    console.log("Error in running server", err);
    }

    console.log(`Server running on port ${port}`);
});