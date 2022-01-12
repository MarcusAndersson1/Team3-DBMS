const clinic = require('./controllers/clinicController')
const mqtt = require('mqtt')
var client = mqtt.connect('tcp://127.0.0.1:1883')


client.subscribe('Timeslot')
client.subscribe('Clinic')

    client.on('connect', function(){
        console.log('Client has subscribed successfully')
    })
        client.on('message', function (topic,message){
            if (topic === 'Clinic') {
                var obj = JSON.parse(message) 
                console.log(obj.clinic)
                clinic.a(obj);
              }
        })
  
    
        
