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

module.exports = {a,b};