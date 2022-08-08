const express = require('express');
const abc = require('../introduction/intro')
const first = require('../logger/logger') //first problem
const second = require('../util/helper') //second problem
const third = require('../validator/formatter')
const router = express.Router();


router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    res.send('My second ever api!')
    first.welcome(); //1st problem
    second.printDate(); // 2nd problem
    third.thirdFunction(); // 3rd problem
});


router.get('/test-you', function(req, res){
    res.send('This is the second routes implementation')
})

router.get('/give-me-students-data',function(req, res){

})
module.exports = router;
// adding this comment for no reason