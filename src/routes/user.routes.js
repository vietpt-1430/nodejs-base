let router = require("express").Router();
let UserController = require("../controllers/user.controller")

router.get("/", UserController.find)
router.post("/signup", UserController.signup)

module.exports = router;
