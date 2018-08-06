const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// set up express app
const app = express();

console.log('1');

// connect to mongodb
mongoose.connect('mongodb://user:pass@host:port/dbname',function(err,db){
        if(err){
         console.log(err);
       }else {
           console.log('connected to the Test db');
       }
     });

console.log('2');
mongoose.Promise = global.Promise;
console.log('3');

//set up static files
app.use(express.static('public'));

console.log('4');

// use body-parser middleware
app.use(bodyParser.json());

console.log('5');

// initialize routes
app.use('/api', require('./routes/api'));

console.log('6');

// error handling middleware
app.use(function(err, req, res, next){
    console.log(err); // to see properties of message in our console
    res.status(422).send({error: err.message});
});
console.log('7');
// listen for requests
app.listen(process.env.port || 3000, function(){
    console.log('now listening for requests');
});
