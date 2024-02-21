const passport = require('passport');
const User = require('../models/user');
const LocalStrategy = require('passport-local').Strategy;

//auth using passport
passport.use(new LocalStrategy({
    usernameField: 'email'
},
function (email, password, done){
    // Find user to establish identity
    User.findOne({ email: email })
        .then(user => {
            return done(null, user);
        })
        .catch(err => {
            console.log('Error in finding user --> Passport');
            return done(err);
        });
}));

//serializing the user to decide which key is to be kept in the cookies
passport.serializeUser(function(user, done){
done(null, user.id);
});

//deserializing the user from the key in the cookies
passport.deserializeUser(function(id, done){
    User.findById(id)
        .then(user => {
            return done(null, user);
        })
        .catch(err => {
            console.log(err);
        })
});

//check if user is authenticated

module.exports = passport;