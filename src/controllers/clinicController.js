var mongoose = require('mongoose');
const mongoDB = 'mongodb+srv://Felix:Mertala10@oralfixation.izcni.mongodb.net/OralFixation?retryWrites=true&w=majority';
var Clinic = require('../models/Clinic');
mongoose.connect(mongoDB, { useNewUrlParser: true , useUnifiedTopology: true})
.then((result) => console.log ('connect to DB'))
.catch((err) => console.log(err))
const client =  mongoose.connection;
client.on('error', console.error.bind(console, 'MongoDB connection error:'));
var clinicId = "61d5f712d62e979a1e44cb57";

 
    var a = async function createClinic(newClinic){ 
        let clinic = await new Clinic(newClinic)
            clinic.save(function(err, clinic){
            if(err){
                console.log(err)
            }else{
            
                clinicId = clinic._id.toString()
                console.log(clinicId)
            }
    })}

module.exports = {a, clinicId};