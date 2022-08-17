const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: String, 
    authorName: String, 
    tags: [String],
    
    isPublished: Boolean,
    prices: {
        indianPrice: String,
        europePrice: String,
    },
    totalpages: Number,
    sales: {type: Number, default: 10},
    year: {type: Number, default:2021}
}, { timestamps: true });


module.exports = mongoose.model('New-book', bookSchema) //users