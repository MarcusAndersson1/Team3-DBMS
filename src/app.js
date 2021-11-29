var mongoose = require('mongoose');
const mongoDB = 'mongodb+srv://Felix:Mertala10@oralfixation.izcni.mongodb.net/OralFixation?retryWrites=true&w=majority';





async function main(){
    await mongoose.connect(mongoDB, { useNewUrlParser: true , useUnifiedTopology: true})
.then((result) => console.log ('connect to DB'))
.catch((err) => console.log(err))
     const client =  mongoose.connection;
client.on('error', console.error.bind(console, 'MongoDB connection error:'));
var namen = await client.db.admin('Felix').listDatabases()
console.log(namen)
}


main();
