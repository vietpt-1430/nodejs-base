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
      //res.send({user: user})
    } catch (error) {
      log.error(error);

      res.status(400).send({'message': 'Log Example Fail !'});
    }
  };
    
  return this;
}

module.exports = ExampleController();
