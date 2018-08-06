const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// set up express app
const app = express();

console.log('1');

// connect to mongodb
mongoose.connect('mongodb://heroku_fz2x0xz9:t9377t39inc1i49nk7bppohc76@ds113942.mlab.com:13942/heroku_fz2x0xz9',{ useNewUrlParser: true },function(err,db){
        if(err){
         console.log('error');
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
app.listen(process.env.PORT || 3000, function(){
    console.log('8');
    console.log('now listening for requests');
});
