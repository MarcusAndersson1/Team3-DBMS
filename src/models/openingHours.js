var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var openingHoursSchema = new Schema({
    monday: {time: {type: String}, 
        timeslots:[{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Timeslot'
        }]
    }, 
    tuesday: {time: {type: String}, 
        timeslots:[{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Timeslot'
        }]
    }, 
    wednesday: {time: {type: String}, 
        timeslots:[{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Timeslot'
        }]
    }, 
    thursday: {time: {type: String}, 
        timeslots:[{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Timeslot'
        }]
    }, 
    friday: {time: {type: String}, 
        timeslots:[{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Timeslot'
        }]
    }, 
    saturday: {time: {type: String}, 
        timeslots:[{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Timeslot'
        }]
    }, 
    sunday: {time: {type: String}, 
        timeslots:[{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Timeslot'
        }]
    }
});

module.exports = mongoose.model('OpeningHours', openingHoursSchema);
