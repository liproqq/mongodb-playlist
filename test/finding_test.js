const assert = require("assert");
const MarioChar = require("../models/mariochar");

// Describe tests
describe("Finding records", function(){
  beforeEach(function(done){
    var char = new MarioChar({
      name:"Mario"
    });

    char.save().then(function(){
      done();
    });

  });
  // Create tests
  it("Finds a record to the database", function(done){

    MarioChar.findOne({name: "Mario"}).then(function(result){
      assert(result.name === "Mario");
      console.log(result);
      done();
    });
  });

  // next test here

});
