var mqtt = require('mqtt')
var client  = mqtt.connect('ws://127.0.0.1:9001') 
var timeslot = require('./controllers/timeslotController')

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
        utter = await timeslot.b()
        client.publish('/timeslots/all/', JSON.stringify(utter))
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