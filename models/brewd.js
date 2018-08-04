const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create geolocation Schema
/*
    type: {
        type: String,
        default: 'Point'
    },
    coordinates: {
        type: [Number],
        index: '2dsphere'
    }
});*/

// create Brewd Schema & model
const BrewdSchema = new Schema({
    cafeName: {
        type: String,
        required: [true, 'Cafe name field is required']
    },
    coffeeRoaster: {
        type: String,
        required: [true, 'Coffee roaster field is required']
    },
    milkBrand: {
      type: String,
      required: [true, 'Milk brand field is required']
    }
});

const Brewd = mongoose.model('brewd', BrewdSchema);

module.exports = Brewd;
