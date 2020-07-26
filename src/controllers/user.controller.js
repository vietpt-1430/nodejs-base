
function UserController()
{
    this.find = function (req, res)
    {
        res.send("find")
    }
    
    this.signup = function (res, req)
    {
    	var user = new User();
 
	    user.username = req.body.username;
	    user.email = req.body.email;
	    user.setPassword(req.body.password);
	  
	  	user.save().then(function(){
	    	return res.json({user: user.toAuthJSON()});
	  	}).catch(next);
    }


    return this;
}

module.exports = UserController();