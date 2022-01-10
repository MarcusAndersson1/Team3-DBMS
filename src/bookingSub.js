var mqtt = require('mqtt')
var client = mqtt.connect('tcp://127.0.0.1:1883')
var clinic = require('./controllers/clinicController')

client.subscribe('/timeslots/request/all/')
client.subscribe('/timeslots/book/', {qos : 1})
client.on('connect', function(){
    console.log('Client has subscribed successfully')
})
client.on('message', async function (topic, message) {
    if (topic === '/timeslots/request/all/') {
        console.log('hej hej')
        let utter = "🦦"
        utter = await clinic.b()
        client.publish('/timeslots/all/', JSON.stringify(utter))
    }
    if (topic === '/timeslots/book/') {
    console.log(message.toString())
        const messageArray = message.toString().split(" ")
        clinic.c(messageArray[0], messageArray[1])
            .then(x => {
                console.log(x)
                if (x == "404") {
                    client.publish('/timeslots/book/response', '404')
                } else if (x == "403") {
                    console.log(x)
                    client.publish('/timeslots/book/response', '403')
                } else if (x == "200") {
                    console.log(x)
                    client.publish('/timeslots/book/response', '200')
                }
            }).catch((err) => console.log(err))
    }

}
)
