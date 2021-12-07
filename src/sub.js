const timeslot = require('./controllers/timeslotController')
const mqtt = require('mqtt')
var client = mqtt.connect('mqtt://broker.hivemq.com')

client.on('connect', function(){
    client.subscribe('Timeslot')
    console.log('Client has subscribed successfully')
})
    client.on('message', function (topic,message){
        console.log(message.toString())
        timeslot(message);
    })

