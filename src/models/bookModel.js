const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    bookName :  String,
    authorName : String,
    category : {
        type : String,
    },
    year : {
        type : Number,
         require : true
        }
},{ timestamps:true });

module.exports = mongoose.model('book',bookSchema);