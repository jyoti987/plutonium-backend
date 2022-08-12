const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb+srv://jyoti-singh:hXv8ICQe0GBH9kpr@cluster0.ncvhe32.mongodb.net/?retryWrites=true&w=majority",{
    useNewurlparser:true
}) 
.then( ()=> console.log("Mongodb is connected"))
.catch(  err => console.log(err))



app.use('/', route);

app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
