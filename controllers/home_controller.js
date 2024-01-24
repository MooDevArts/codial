module.exports.lol = function(req, res){
    return res.end('<h1>LOL</h1>');
}

module.exports.home = function(req, res){
    return res.end('<h1>Ok its working</h1>');
}