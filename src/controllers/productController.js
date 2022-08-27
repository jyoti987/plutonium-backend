const { count } = require("console")
const ProductModel = require("../models/productModel")
// const userModel = require("../models/userModel")

const createProduct = async function (req, res){
    let data = req.body
    let ProductData = await ProductModel.create(data)

    res.send({data: ProductData})
}


module.exports.createProduct = createProduct