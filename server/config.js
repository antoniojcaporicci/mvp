var mongoose = require('mongoose');

var mongoDB = 'mongodb://127.0.0.1/news';
mongoose.connect(mongoDB);

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

db.once("open", function(callback){
    console.log("Connection Succeeded.");
});

module.exports = db;
