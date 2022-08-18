const { count } = require("console")
const BookModel= require("../models/bookModel")
const AuthorModel= require("../models/authorModel")



// -------------------answer 1 -------------------------


const createBook= async function (req, res) {
    let data= req.body
    let authorId= BookModel.author_id
    if(!authorId){
        return res.send({msg: "Author Id is mandatory"})
    }
    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const createAuthor= async function (req, res) {
    let data= req.body
    let savedData= await AuthorModel.create(data)
    res.send({msg: savedData})
}



// ----------------------------answer 2 -------------------------

const booksByChetanBhagat= async function(req,res){
    let author= await AuthorModel.find({ author_name: "Chetan Bhagat"})
    let book= await BookModel.find({ author_id: {$eq: author[0].author_id}})
    
    res.send({ msg: book})
}



// // ----------------------------answer 3 -------------------------

const twoStates= async function(req,res){
    let newName= await BookModel.findOneAndUpdate({ name: "Two states"},{$set: {price: 100}})
    let value = newName.author_id
    let bookPrice = newName.price
    let newData = await AuthorModel.find({ author_id: value}).select({author_name: 1, bookPrice: 1})
    res.send({msg: bookPrice, newData})
}


// // ----------------------------answer 4 -------------------------

const findBook = async function(req,res){
    let books= await BookModel.find( { price : { $gte: 50, $lte: 100} } )
    let newBooks= books.map(x=>x.author_id)
    let finalBooks= await AuthorModel.find({author_id: newBooks}).select({author_name : 1, _id : 0})
    res.send({ msg: finalBooks})
}













module.exports.createBook= createBook
module.exports.createAuthor= createAuthor
module.exports.booksByChetanBhagat = booksByChetanBhagat
module.exports.twoStates= twoStates
module.exports.findBook = findBook
// module.exports.getBookData= getBookData









// const getBooksData= async function (req, res) {
//     let allBooks= await BookModel.find( {authorName : "HO" } )
//     console.log(allBooks)
//     if (allBooks.length > 0 )  res.send({msg: allBooks, condition: true})
//     else res.send({msg: "No books found" , condition: false})
// }


// const updateBooks= async function (req, res) {
//     let data = req.body // {sales: "1200"}
//     // let allBooks= await BookModel.updateMany( 
//     //     { author: "SK"} , //condition
//     //     { $set: data } //update in data
//     //  )
//     let allBooks= await BookModel.findOneAndUpdate( 
//         { authorName: "ABC"} , //condition
//         { $set: data }, //update in data
//         { new: true , upsert: true} ,// new: true - will give you back the updated document // Upsert: it finds and updates the document but if the doc is not found(i.e it does not exist) then it creates a new document i.e UPdate Or inSERT  
//      )
     
//      res.send( { msg: allBooks})
// }

// const deleteBooks= async function (req, res) {
//     // let data = req.body 
//     let allBooks= await BookModel.updateMany( 
//         { authorName: "FI"} , //condition
//         { $set: {isDeleted: true} }, //update in data
//         { new: true } ,
//      )
     
//      res.send( { msg: allBooks})
// }




// // CRUD OPERATIONS:
// // CREATE
// // READ
// // UPDATE
// // DELETE





// module.exports.updateBooks= updateBooks
// module.exports.deleteBooks= deleteBooks
