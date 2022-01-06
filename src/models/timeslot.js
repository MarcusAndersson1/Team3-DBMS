var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var timeslotSchema = new Schema({
    dateTime: {type: String, unique: true},
    isAvailable : {type: Boolean},
    user: {type: mongoose.Schema.Types.ObjectId,
        ref: 'User'} ,
    clinic: {type: mongoose.Schema.Types.ObjectId,
        ref: 'Clinic', require: true}
});

module.exports = mongoose.model('Timeslot', timeslotSchema);
