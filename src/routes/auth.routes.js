let router = require("express").Router();
let authMiddleware = require("../middleware/auth.middleware");
let AuthController = require("../controllers/user.controller")
//public
router.post("/login", AuthController.login)


//private
router.post("/logout", authMiddleware, AuthController.add)

module.exports = router;