let router = require("express").Router();
let authMiddleware = require("../middleware/auth.middleware");
let AuthController = require("../controllers/auth.controller")
//public
router.post("/login", AuthController.login)

//private
router.post("/logout", authMiddleware, AuthController.logout)

module.exports = router;