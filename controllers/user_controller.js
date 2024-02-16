const User = require('../models/user');

module.exports.profile = function(req, res){
    let userid = req.cookies.user_id;
    let userProfile;
    if(userid){
    User.findById(userid)
    .then(user => {
        userProfile = user;
        return res.render('user-profile', {
            title: "User profile",
            user: userProfile
        })
    })
    .catch(err=>{
        console.log('err on profile page', err);
        return res.redirect('back');
    })
}else{
    res.redirect('/user/sign-up');
}
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
    res.clearCookie('user_id');
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

//user authentication
module.exports.createSession = function(req, res){

    //finding user
    User.findOne({email: req.body.email})
    .then(user => {

        //handle user found
        if(user){
            if(user.password == req.body.password){
                res.cookie('user_id', user.id);
                return res.redirect('/user/profile');
            }else{
                //handle wrong password
                console.log('wrong password');
                return res.redirect('back');
            }
        }else{
            //handle user not found
            console.log('user not found');
            return res.render('/user/sign-up');
        }

    })
    .catch(err => {
        console.log('error in finding user', err)
    })
    

        

    //handle session creation

    
}