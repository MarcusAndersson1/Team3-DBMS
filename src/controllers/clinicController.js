var mongoose = require('mongoose');
const mongoDB = 'mongodb+srv://Felix:Mertala10@oralfixation.izcni.mongodb.net/OralFixation?retryWrites=true&w=majority';
var Clinic = require('../models/Clinic');
mongoose.connect(mongoDB, { useNewUrlParser: true , useUnifiedTopology: true})
.then((result) => console.log ('connect to DB'))
.catch((err) => console.log(err))
const client =  mongoose.connection;
client.on('error', console.error.bind(console, 'MongoDB connection error:'));


 
    var a = async function createClinic(newClinic){ 
        let clinic = await new Clinic(newClinic)
       // console.log(JSON.stringify(clinic))
            clinic.save(function(err, clinic){
            if(err){
                console.log(err)
            }
    })}

    var b = async function readTimeslot(){
        const clinics = await Clinic.find({})
        return clinics 
}

var c = async function updateTimeslot(clinicId, timeslotId){
    
    const timeslot = await Clinic.updateOne({_id:clinicId,timeslots:{'$elemMatch':{_id:timeslotId}}}, { '$set': { 'timeslots.$.isAvailable': false }})
    console.log(timeslot.modifiedCount) 
    console.log(timeslot.matchedCount)
    
    if(timeslot.matchedCount === 0){
        return "404"
    }else if(timeslot.modifiedCount === 0){
        return "403"
    }else{
        return "200"
    }
  
}



module.exports = {a,b,c};