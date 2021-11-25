var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: { type: String},
    personalNumber: {type: Number},
    email: { type: String },
    password: { type: String },
    isAdmin: { type: Boolean},
});

module.exports = mongoose.model('user', userSchema);
