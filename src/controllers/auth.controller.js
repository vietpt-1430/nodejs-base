let passport = require('passport')

function AuthController()
{
    this.login = function (res, req)
    {
		passport.authenticate('local', {session: false}, function(err, user, info) {
		    if(err){ return next(err); }
		 
		    if(user){
		      user.token = user.generateJWT();
		      return res.json({user: user.toAuthJSON()});
		    } else {
		      return res.status(422).json(info);
		    }
	  	})(req, res, next);
    }

    this.logout = function (res, req)
    {
        
    }
    
    return this;
}

module.exports = AuthController();