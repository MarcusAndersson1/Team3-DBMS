### Description
This component handles all the database requests and works as a database controller for the rest of the systems components.

Controllers/ClinicController.js - Contains CRUD operations for Clinic and timeslots into our MongoDB database
Sub.js - Subscribes to MQTT information sent by the JSON Parser/TimeslotHandler
BookingSub.js contains both functionallity for publish and subscribe to Backend; subscribe to wait on fetch requests and booking requests, and publish to provide fetched information in JSON or confirmation/error in the form of status codes 200, 403, 404, 500.
Models/Clinic.js - Contains Mongoose Schema for clinics and Timeslots.

### Running
Into the terminal, type the following:
1. `cd src`
2. `npm install`
3. Choose:

    `node sub.js` if you want to handle timeslots
 
    `node bookingSub.js` if you want to handle bookings
