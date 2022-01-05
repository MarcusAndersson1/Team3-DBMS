var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var clinicSchema = new Schema({
    id: { type: String, unique: true },
    name: { type: String },
    owner: { type: String },
    dentists: { type: Number },
    address: {type: String},
    city: {type: String},
    coordinates: { 
        long: {type: String},
        lat: {type: String}
    },
    openingHours: {
        monday: {type: String},
        tuesday: {type: String},
        wednesday: {type: String},
        thursday: {type: String},
        friday: {type: String},
    }})

module.exports = mongoose.model('Clinic', clinicSchema)
