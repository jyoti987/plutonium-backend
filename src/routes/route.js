const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    logger.welcome()

    res.send('My second ever api!')
});

router.get('/students', function (req, res){
    let students = ['Sabiha', 'Neha', 'Akash']
    res.send(students)
})

router.get('/student-details/:name', function(req, res){
    /*
    params is an attribute inside request that contains 
    dynamic values.
    This value comes from the request url in the form of an 
    object where key is the variable defined in code 
    and value is what is sent in the request
    */

    let requestParams = req.params

    // JSON strigify function helps to print an entire object
    // We can use any ways to print an object in Javascript, JSON stringify is one of them
    console.log("This is the request "+ JSON.stringify(requestParams))
    let studentName = requestParams.name
    console.log('Name of the student is ', studentName)
    
    res.send('Dummy response')
})

// --------------------- solution 1 -----------------------------------------


router.get('/movie', function(req,res){
    let moviesName = ['Rang de basanti', 'The shining' , 'Lord of the rings' , 'Batman begins'];
    res.send(moviesName)
    console.log(moviesName)

})


// ----------------------------solution 2 and 3 ---------------------------------


router.get ('/movies/:indexNumber', (req,res) => {
    const moviesName = ['Rang de basanti', 'The shining' , 'Lord of the rings' , 'Batman begins'];
    let indexOfMovie = (req.params.indexNumber)
    console.log( indexOfMovie)

    if (indexOfMovie < 0 || indexOfMovie > moviesName.length){
        res.send("please insert valid index")
    }
    else{
        res.send(moviesName[indexOfMovie])
    }
})

// ---------------------------------solution 4 -----------------------------------------


router.get ('/film/:idNumber', function(req,res){
    const filmsObj = [ ['id: 1', "name: The Shining"], 
    ['id: 2', "name: Incendies"], 
    ['id: 3', "name: Rang de Basanti"], 
    ['id: 4', "name: Finding Nemo"]]

    let index=req.params.idNumber;

    if(index > filmsObj.length){
        return res.send("plz insert valid id")
    }else{
        res.send(filmsObj[index])
 }
})





// ---------------------------------------------Solution 5 ----------------------------------------------


router.get ('/get-/films/:id', function(req,res){
    let moviesObj = [ {"id": 1, "name": "The Shining"}, 
    {"id": 2, "name": "Incendies"}, 
    {"id": 3, "name": "Rang de Basanti"}, 
    {"id": 4, "name": "Finding Nemo"}]
    
    var result = req.params.id
    result1 = result - 1
    if(result <= moviesObj.length){
        res.send(moviesObj[result1])
            
                } else{
                    res.send("No movie exists with this id")
    }
    
    })









  



   











module.exports = router;