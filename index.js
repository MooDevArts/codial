const express = require('express');
const app = express();
const port = 8000;

//statics
app.use(express.static('./assets'));

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