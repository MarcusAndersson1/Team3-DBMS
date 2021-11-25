var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var clinicSchema = new Schema({
    id: { type: String },
    name: { type: String },
    owner: { type: String },
    dentists: { type: Number },
    address: {type: String},
    city: {type: String},
    coordinates: { 
        long: {type: String},
        lat: {type: String}
    }
})

module.exports = mongoose.model('clinic', clinicSchema)
