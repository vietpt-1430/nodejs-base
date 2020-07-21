let router = require("express").Router();

let UserController = require("../controllers/user.controller")

router.get("/", UserController.find)
router.get("/add", UserController.add)

module.exports = router;