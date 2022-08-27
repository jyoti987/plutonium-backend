const UserModel = require("../models/userModel")
const ProductModel = require("../models/productModel")
const OrderModel = require("../models/orderModel")

const createOrder = async function (req, res) {
    let data = req.body
    let userId = req.body.userId
    let productId = data.productId

 // when userid and productid is not in data 
    if (!userId) {
        return res.send({ msg: 'userId is mandatory in the request' })
    } else if (!productId) {
        return res.send("please enter valid productId")
    } else{ }


// when we enter wrong userid and productid in data
    let UserId = await UserModel.findById(userId)
    let ProductId = await ProductModel.findById(productId)

    if (!UserId) {
        return res.send("this user id is not found in user databse")
    } else if (!ProductId) {
        return res.send("this product id is not found in product database ")
    } else { }




    let tokan = req.headers.isfreeappuser
    // console.log(tokan)
    let value = 0
    //if isFreeAppUser is true
    if (tokan === 'true') {
        data.amount = value
        data.isFreeAppUser = tokan
        let savedData = await OrderModel.create(data)
        res.send({ data: savedData })

    }  


    //if isFreeAppUser is false
    else if (UserId.balance >= ProductId.price) {await UserModel.findOneAndUpdate({ _id: userId },
            { $set: { balance: UserId.balance - ProductId.price } })
        data['amount'] = ProductId.price;
        data['isFreeAppUser'] = req.headers.isfreeappuser;

        let savedData = await OrderModel.create(data)
        res.send({ msg: savedData })

    } else {
        res.send("Insufficient Balance!")
    }
}





module.exports.createOrder = createOrder