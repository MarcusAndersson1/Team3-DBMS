var mongoose = require('mongoose');
const mongoDB = 'mongodb+srv://Felix:Mertala10@oralfixation.izcni.mongodb.net/OralFixation?retryWrites=true&w=majority';
var Clinic = require('../models/Clinic');
 mongoose.connect(mongoDB, { useNewUrlParser: true , useUnifiedTopology: true})
    .then((result) => console.log ('connect to DB'))
    .catch((err) => console.log(err))
    const client =  mongoose.connection;
    client.on('error', console.error.bind(console, 'MongoDB connection error:'));

  

function createClinic(idNumber, name, owner, dentist, address, city, long, lat, monday, tuesday, wednesday, thursday, friday){ 

    Clinic.findOne({id:idNumber}, function(err, clinic) {
        // don't forget to check for errors here, masked for clarity
        if(clinic) {
            console.log("Clinic already exists")
        }else{
            
        

    var test = {
        id: idNumber,
    name: name,
    owner: owner,
    dentists: dentist,
    address: address,
    city: city,
    coordinates: { 
        long: long,
        lat: lat
    },openingHours: {
        monday: monday,
        tuesday: tuesday,
        wednesday: wednesday,
        thursday: thursday,
        friday: friday
    }
    }
 
    let clinic = new Clinic(test)
        clinic.save(function(err, clinic){
        if(err){
            console.log(err)
        }else{
            console.log(clinic)
        }
})}})} 

//findCLinic("1")
//createClinic("2","Tisden", "Felix", 1,"gatan 5", "göteborg", "50", "50", "", "","","","")

