const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const commonMW= require("../middleware/auth")


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


// ----------------createUser API -----------------------
router.post("/users", userController.createUser  )


// --------------------------log-in User API--------------------------------
router.post("/login", userController.loginUser, commonMW.tokenCreated)


// -----------------------------update User Data API ------------------------
router.put("/users/:userId", userController.updateUser)

// --------------------delete user API------------------------------ 
router.put("/deleteUser/:userId", userController.deleteUser)

// -------------------------------get user data API-----------------------------------
router.get("/getUsers/:userId",commonMW.tokenVerify, userController.getUserData)



module.exports = router;