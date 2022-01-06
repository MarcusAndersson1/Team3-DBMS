var mongoose = require('mongoose');
const mongoDB = 'mongodb+srv://Felix:Mertala10@oralfixation.izcni.mongodb.net/OralFixation?retryWrites=true&w=majority';
var Timeslot = require('../models/Timeslot');
var clinicId = require('../controllers/clinicController')
 mongoose.connect(mongoDB, { useNewUrlParser: true , useUnifiedTopology: true})
    .then((result) => console.log ('connect to DB'))
    .catch((err) => console.log(err))
    const client =  mongoose.connection;
    client.on('error', console.error.bind(console, 'MongoDB connection error:'));

 var a = async function createTimeslot(date){ 
     console.log("this is: "+ clinicId.clinicId)
    var test = {
        dateTime: date,
        isAvailable : true,
        user: null,
        clinic: clinicId.clinicId
    }
    let timeslot = await new Timeslot(test)
        timeslot.save(function(err, timeslot){
        if(err){
            console.log(err)
        }else{
            console.log(timeslot)
        }
})}

function createTimeslot(date, clinic){ 
    var test = {
        dateTime: date,
        isAvailable : true,
        user: null,
        clinic: clinic
    }
    let timeslot = new Timeslot(test)
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

//createTimeslot("2020", '61d5f712d62e979a1e44cb57')
module.exports = a;