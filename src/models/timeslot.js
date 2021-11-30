var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var timeslotSchema = new Schema({
    dateTime: {type: String},
    isAvailable : {type: Boolean}
});

module.exports = mongoose.model('Timeslot', timeslotSchema);
