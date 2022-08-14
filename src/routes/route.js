const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const bookControllers = require('../controllers/bookController')


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", UserController.createUser  )

router.get("/getUsersData", UserController.getUsersData)



router.post('/new-book',bookControllers.newBookData);

router.get('/all-book',bookControllers.allBooksData);



module.exports = router;