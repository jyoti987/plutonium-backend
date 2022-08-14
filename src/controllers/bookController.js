const BookModel = require('../models/bookModel');

const newBook = async function(req,res){
  const newBookData =  req.body 
  const newBook = await BookModel.create(newBookData);
  res.send({msg : newBook});
};

const allBooks = async function(req,res){
    const allBooksData = await BookModel.find();
    res.send({ msg : allBooksData });
  }

  module.exports.newBookData = newBook ;
  module.exports.allBooksData = allBooks ;
  


