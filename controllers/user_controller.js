const User = require('../models/user');

module.exports.profile = function(req, res){
    return res.render('user-profile');
}

module.exports.redirect = function(req, res){
    res.redirect('/user/profile');
}

module.exports.signUp = function(req, res){
    return res.render('sign-up', {
        title: "Sign Up"
    });
}

module.exports.signIn = function(req, res){
    return res.render('sign-in', {
        title: "Sign In"
    });
}

module.exports.create = function(req, res){
    User.findOne({email: req.body.email})
    .then(user => {
        if(user){
            return res.render('error' , {
                title: "error",
                body: "User Exists"
            });
        }else{
            User.create({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            })
            .then(newUser => {
                console.log('new user created', newUser);
                return res.render('user-profile', {
                    title: "Profile"
                });
            })
            .catch(err => {
                console.log('error in creating user', err);
            });
        }
    })
    .catch(err => {
        console.log('error in finding user', err);
    });
}

module.exports.createSession = function(req, res){
    //later
    return res.redirect('/')
}