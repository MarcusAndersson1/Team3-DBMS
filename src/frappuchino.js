var mqtt = require('mqtt')
var client  = mqtt.connect('ws://127.0.0.1:9001') 
var timeslot = require('./controllers/timeslotController')
var clinic = require('./controllers/clinicController')

function requestListener(){
    client.subscribe('/timeslots/request/all/')
    console.log("listening")
}

function bookingListener(){
    client.subscribe('/timeslots/book/')
}

client.on('message', async function (topic, message) {
    if (topic === '/timeslots/request/all/'){
        console.log('hej hej')
        let utter = "🦦"
        let utter2 = "🦦"
        utter = await timeslot.b()
        utter2 = await clinic.b()
        information = {utter, utter2}
        client.publish('/timeslots/all/', JSON.stringify(information))
    }
    if (topic === '/timeslots/book/'){
        let successful = await bokaTid(message.toString())
        if(successful){
            client.publish('/timeslots/book/'+message.toString(), "200")
        }else{client.publish('/timeslots/book/'+message.toString(), "400")}
    }

})



async function bokaTid(id){

}

requestListener()