module.exports.profile = function(req, res){
    return res.render('user-profile');
}

module.exports.redirect = function(req, res){
    res.redirect('/user/profile');
}