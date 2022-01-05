const timeslot = require('./controllers/timeslotController')
const clinic = require('./controllers/clinicController')
const mqtt = require('mqtt')
var client = mqtt.connect('mqtt://broker.hivemq.com')


 /*   client.on('message', function (topic,message){
        console.log(message.toString())
        timeslot(message);
    })*/

    client.on('connect', function(){
        client.subscribe('Clinic')
        client.subscribe('Timeslot')
        console.log('Client has subscribed successfully')
    })
        client.on('message', function (topic,message){
            var obj = JSON.parse(message) // payload is a buffer
            clinic(obj);
        })

  
    
    