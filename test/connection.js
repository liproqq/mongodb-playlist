const mongoose = require("mongoose");

// ES6 Promises
mongoose.Promise = global.Promise;

// Connect to the db before tests runs

before(function(){


  //connect to mongodb
  mongoose.connect("mongodb://localhost/testaroo");

  mongoose.connection.once("open", function(){
    console.log("Conenction has been made, now make fireworks...");
  }).on("error", function(error){
    console.log("connection error", error);
  });


});
