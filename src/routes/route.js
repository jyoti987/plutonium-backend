const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const middleWare = require("../middleware/auth")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser)

router.post("/loginUser", userController.loginUser, middleWare.validate)

//The userId is sent by front end
router.get("/getUsers/:userId", userController.getUserData)
router.post("/userPost/:userId/posts",middleWare.authorise, userController.postMessage)

router.put("/updateUsers/:userId", userController.updateUser)
router.put('/deleteUsers/:userId',middleWare.authorise, userController.deleteUser)

module.exports = router;