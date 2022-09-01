const jwt = require('jsonwebtoken')
const userModel = require("../models/userModel")
const mongoose = require('mongoose')






// const mid1= function ( req, res, next) {
//     req.falana= "hi there. i am adding something new to the req object"
//     console.log("Hi I am a middleware named Mid1")
//     next()
// }

// const mid2= function ( req, res, next) {
//     console.log("Hi I am a middleware named Mid2")
//     next()
// }

// const mid3= function ( req, res, next) {
//     console.log("Hi I am a middleware named Mid3")
//     next()
// }

// const mid4= function ( req, res, next) {
//     console.log("Hi I am a middleware named Mid4")
//     next()
// }















const authenticate = async function (req, res) {
    // try {
        let userName = req.body.emailId;
        let user = await userModel.findOne({ emailId: userName })
        let token = jwt.sign(
            {
                userId: user._id.toString(),
                batch: "Plutonium",
                organisation: "Function-up",
            },
            "functionup-Plutonium-key"
        );
        res.setHeader("x-auth-token", token);
        res.send({ status: true, data: token });
    // } catch (error) {
    //     res.status(201).send(error.message)
    // }
};
















const authorise = function (req, res, next) {
    try {
        let token = req.headers["x-Auth-token"];
        if (!token) token = req.headers["x-auth-token"];
        if (!token) return res.status(403).send({ status: false, msg: "token must be present" });

        let decodedToken = jwt.verify(token, "functionup-Plutonium-key")
        let userLoggedIn = decodedToken.userId
        let userToBeModified = req.params.userId

        let isValid = mongoose.Types.ObjectId.isValid(userToBeModified)

        if (isValid === false) {
            return res.send("length of the id is less then 24 digit")
        }
        else if (!decodedToken) {
            return res.status(401).send({ status: false, msg: "token is invalid" });
        }
        else if (userToBeModified != userLoggedIn) {
            return res.send({ status: false, msg: 'User logged is not allowed to modify the requested users data' })
        } else {
            next();
        }
    } catch (error) {
        res.status(201).send(error.message)
    }
}

module.exports.authenticate = authenticate
module.exports.authorise = authorise
// module.exports.authorise2 = authorise2

// module.exports.mid1 = mid1
// module.exports.mid2 = mid2
// module.exports.mid3 = mid3
// module.exports.mid4 = mid4
