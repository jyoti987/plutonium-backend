const authorModel = require("../models/authorModel")
 const publisherModel = require("../models/publisherModel")
 const bookModel = require("../models/bookModel")

 const createBook = async function (req, res) {
     let book = req.body
     let bookCreated = await bookModel.create(book)     
     res.send({ data: bookCreated })
 }

 


 const getBooksData = async function (req, res) {
     let books = await bookModel.find()
     res.send({ data: books })
 }

 const getBooksWithAuthorDetails = async function (req, res) {
     let specificBook = await bookModel.find().populate(['author_id', 'publisher'])
     res.send({ data: specificBook })

 }


 const getBookValid = async function (req, res) {
     const book = req.body
     const author = req.body.author_id
     const publisher_id = req.body.publisher
     const isValidAuthor = await authorModel.find({ _id: author }).select({ _id: 1 })
     const isValidPublisher = await publisherModel.find({ _id: publisher_id }).select({ _id: 1 })


     if (isValidAuthor.length > 0) {
         if (isValidPublisher.length > 0) {
             const newBook = await bookModel.create(book)
             res.send({ newBook: newBook })
         } else {
             res.send({ msg: "Enter valid Publisher id" })
         }
     } else {
         res.send({ msg: "Enter valid Author id" })
     }



 }





 const bookUpdate = async function (req, res) {
     const data = await publisherModel.find({ $or:  [{"name" : "Penguin"} , { "name" : "harperCollins" }] })
     const updatedData=await bookModel.updateMany({publisher:data},{"hardCover":true})
     res.send(updatedData);
 }



const priceUpdate = async function (req, res) {
    const data = await authorModel.find({rating:{$gt:3.5}}).select({_id:1})
    const update=await bookModel.updateMany({author_id:data},{$inc:{price:+10}},{new:true})

    res.send(update);
 }



 module.exports.getBookValid = getBookValid
 module.exports.createBook = createBook
 module.exports.getBooksData = getBooksData
 module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
 module.exports.bookUpdate  = bookUpdate
 module.exports.priceUpdate  = priceUpdate 
// // module.exports.getBookValid = getBookValid





















