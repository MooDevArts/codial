const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/codial_development');

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to Mongo"));

db.once('open', function(){
    console.log('Connected to MongoDB');
})