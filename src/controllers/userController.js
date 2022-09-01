// const jwt = require("jsonwebtoken");
const UserModel = require("../models/userModel");

// const basicCode= async function(req, res) {
//     let tokenDataInHeaders= req.headers.token
//     console.log(tokenDataInHeaders)

//     console.log( "HEADER DATA ABOVE")
//     console.log( "hey man, congrats you have reached the Handler")
//     res.send({ msg: "This is coming from controller (handler)"})
//     }




const createUser = async function (req, res) {
    try {
        let data = req.body
        let savedData = await UserModel.create(data)
        res.send({ msg: savedData })
    } catch (err) {
        res.status(201).send(error.message)
    }

}



const loginUser = async function (req, res, next) {
    try {
        let userName = req.body.emailId;
        let password = req.body.password;

        let user = await UserModel.findOne({ emailId: userName, password: password });
        if (!user)
            return res.status(404).send({ status: false, msg: "username or the password is not corerct", });

    }
    catch (error) {
        res.status(200).send(error.message)

    }
    next();
}




const updateUser = async function (req, res) {
    try {
        let userId = req.params.userId;
        let user = await UserModel.findById(userId);
        //Return an error if no user with the given id exists in the db
        if (!user) {
            return res.status(404).send("No such user exists");
        }

        let userData = req.body;
        let updatedUser = await UserModel.findOneAndUpdate({ _id: userId }, userData);
        res.send({ status: updatedUser, data: updatedUser });

    } catch (error) {
        res.status(200).send(error.message)
    }
}




const postMessage = async function (req, res) {
    try {
        let message = req.body.message

        let user = await UserModel.findById(req.params.userId)
        if (!user) return res.send({ status: false, msg: 'No such user exists' })

        let updatedPosts = user.posts
        //add the message to user's posts
        updatedPosts.push(message)
        let updatedUser = await UserModel.findOneAndUpdate({ _id: user._id }, { posts: updatedPosts }, { new: true })

        //return the updated user document
        return res.send({ status: true, data: updatedUser })

    } catch (error) {
        res.status(200).send(error.message)
    }
}



const getUsersData = async function (req, res) {
    try {
        let userId = req.params.userId;
        let userDetails = await UserModel.findById(userId);
        if (!userDetails) {
            return res.status(404).send({ status: false, msg: "No such user exists" });
        } else if (userDetails.isDeleted == true) {
            res.status(404).send('this user is deleted in our database')
        } else {

            res.send({ status: true, data: userDetails });
        }

    } catch (error) {
        res.status(200).send(error.message)
    }
}






const deleteUser = async function (req, res) {
    try {

        let userId = req.params.userId;
        let userDetails = await UserModel.findById(userId);
        if (!userDetails) {
            return res.status(404).send({ status: false, msg: "No such user exists" });
        }

        else {
            userDetails.isDeleted = true
            let deletedUser = await UserModel.findOneAndUpdate({ _id: userId }, userDetails, { new: true })
            res.send({ status: true, data: deletedUser })
        }
    } catch (error) {
        res.status(404).send(error.message)
    }

};







module.exports.createUser = createUser
module.exports.getUsersData = getUsersData
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.postMessage = postMessage;
module.exports.deleteUser = deleteUser;