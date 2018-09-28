const express = require ('express');
const router = express.Router();
const Brewd = require('./brewd');

// get a list of ninjas from the db
router.get('/brewd', (req, res, next) => {
  Brewd.find({coffeeRoaster: req.query.coff, milkBrand: req.query.milk}).then(function(brewd){
    res.send(brewd);
    console.log(brewd);
  });
});

// add a new ninja to the db
router.post('/brewd', (req, res, next) => {
    Brewd.create(req.body).then(function(brewd){
        res.send(brewd);
    }).catch(next);
});

// update a ninja in the db
router.put('/brewd/:id', function(req, res, next){
    Brewd.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
        Brewd.findOne({_id: req.params.id}).then(function(brewd){
            res.send(brewd);
        });
    }).catch(next);
});

// delete a ninja from the db
router.delete('/brewd/:id', function(req, res, next){
    Brewd.findByIdAndRemove({_id: req.params.id}).then(function(brewd){
        res.send(brewd);
    }).catch(next);
});

module.exports = router;
