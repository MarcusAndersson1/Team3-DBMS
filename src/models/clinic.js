var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var clinicSchema = new Schema(
    {
        clinic:
        {
            id: { type: Number },
            name: { type: String },
            owner: { type: String },
            dentists: { type: Number },
            address: { type: String },
            city: { type: String },
            coordinate: {
                longitude: { type: Number },
                latitude: { type: Number }
            },
            openinghours: {
                monday: { type: String },
                tuesday: { type: String },
                wednesday: { type: String },
                thursday: { type: String },
                friday: { type: String },
            }
        }
        ,
        timeslots: [{
            dateTime: { type: String },
            isAvailable: { type: Boolean },
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User'
            }
        }]
    }
)

module.exports = mongoose.model('Clinic', clinicSchema)
