var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var timeslotSchema = new Schema({
    dateTime: {type: Date},
    isAvailable : {type: Boolean}
});

module.exports = mongoose.model('timeslot', timeslotSchema);
