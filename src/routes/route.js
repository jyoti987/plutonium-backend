const express = require('express');
const lodash = require('lodash')
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
    let months = ['January', 'February','March','April','May','June','July','August','September','October','November','December']
    let arr = lodash.chunk(months,3)
    console.log(arr)

    let arr2 = [3,5,7,9,11,13,15,17,19.21]
    let result = lodash.tail(arr2,9)
    console.log(result)

    let arr3 =[1,1,2,2,3,3]
    let result2 =lodash.union(arr3)
    console.log(result2)

    let arr4 = [["horror","The Shining"] ["drama","Titanic"] ["thriller","Shutter Island"] ["fantasy","Pans Labyrinth"]];
    let result3 = {}
    result3 = lodash.fromPairs(arr4,1)
    console.log(result3)

});


router.get('/test-you', function(req, res){
    res.send('This is the second routes implementation')
})

router.get('/give-me-students-data',function(req, res){

})
module.exports = router;
// adding this comment for no reason