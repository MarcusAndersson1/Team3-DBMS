const timeslot = require('./controllers/timeslotController')
const clinic = require('./controllers/clinicController')
const mqtt = require('mqtt')
var client = mqtt.connect('mqtt://broker.hivemq.com')


client.subscribe('Timeslot')
client.subscribe('Clinic')

    client.on('connect', function(){
        console.log('Client has subscribed successfully')
    })
        client.on('message', function (topic,message){
            if (topic === 'Clinic') {
                var obj = JSON.parse(message) 
                var hasArrived = clinic.a(obj);
                if(hasArrived) {
                    client.publish("Clinic/true", "Create Clinic")
                }
                console.log(hasArrived)
              }else if (topic === 'Timeslot') {
                console.log(message.toString())
            timeslot.a(message);
              }
            
              
            
        })
  
    
        