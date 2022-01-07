var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var timeslotSchema = new Schema({
    dateTime: {type: String},
    isAvailable : {type: Boolean},
    user: {type: mongoose.Schema.Types.ObjectId,
        ref: 'User'} 
});

module.exports = mongoose.model('Timeslot', timeslotSchema);
