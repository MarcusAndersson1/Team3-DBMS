var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var openingHoursSchema = new Schema({
    monday: {type: String},
    tuesday: {type: String},
    wednesday: {type: String},
    thursday: {type: String},
    friday: {type: String},
    saturday: {type: String},
    sunday: {type: String}
});

module.exports = mongoose.model('openingHours', openingHoursSchema);
