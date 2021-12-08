var mongoose = require('mongoose');
const mongoDB = 'mongodb+srv://Felix:Mertala10@oralfixation.izcni.mongodb.net/OralFixation?retryWrites=true&w=majority';
var Timeslot = require('../models/Timeslot');
 mongoose.connect(mongoDB, { useNewUrlParser: true , useUnifiedTopology: true})
    .then((result) => console.log ('connect to DB'))
    .catch((err) => console.log(err))
    const client =  mongoose.connection;
    client.on('error', console.error.bind(console, 'MongoDB connection error:'));

 var a = async function createTimeslot(date){ 
    var test = {
        dateTime: date,
        isAvailable : true
    }
    let timeslot = await new Timeslot(test)
        timeslot.save(function(err, timeslot){
        if(err){
            console.log(err)
        }else{
            console.log(timeslot)
        }
})}

async function readTimeslot(){
        const timeslots = await Timeslot.find({})
        console.log(timeslots) 
}

async function deleteAllTimeslots(){
    const timeslots = await Timeslot.deleteMany({})
    console.log(timeslots)
}

async function updateTimeslot(id){

    const timeslot = await Timeslot.updateOne({_id: id}, { isAvailable: false })
    console.log(timeslot.modifiedCount) 
    console.log(timeslot.acknowledged) 
}

//deleteAllTimeslots()
module.exports = a;