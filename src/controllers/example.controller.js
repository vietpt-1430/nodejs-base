const log = require('../common/log');

function ExampleController()
{
  this.log = async(req, res) => {
    try {
      log.debug('Log Example Function !');
      var user = {
        'message': 'Log Example Function !'
      };
      
      res.send({user: user.toAuthJSON()});
    } catch (error) {
      log.error(error);
      res.status(400).send({'message': 'Log Example Fail !'});
    }
  };

  this.logDefault = async(req, res, next) => {
    try {
      res.send({user: user.toAuthJSON()});
    } catch (error) {
      // Notice that when not calling “next” in an error-handling function, you are responsible for writing (and ending) the response. 
      // Otherwise those requests will “hang” and will not be eligible for garbage collection.
      
      next(error, req, res);
    }
  };
    
  return this;
}

module.exports = ExampleController();
