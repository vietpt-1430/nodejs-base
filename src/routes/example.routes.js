let router = require('express').Router();

const ExampleController = require('../controllers/example.controller');
//public
router.get('/log', ExampleController.log);

module.exports = router;
