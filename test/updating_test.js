const assert = require("assert");
const MarioChar = require("../models/mariochar");

// Describe tests
describe("Updating records", function(){

  var char;

  beforeEach(function(done){
    char = new MarioChar({
      name:"Mario",
      weight: 50
    });



    char.save().then(function(){
      done();
    });


  });
  // Create tests
  it("Update a record from the database", function(done){

    MarioChar.findOneAndUpdate({name: "Mario"}, {name: "Peach"}).then(function(){
      MarioChar.findOne({_id : char._id}).then(function(result){
        assert(result.name === "Peach");
        done();
      })
    });
  });

  it("Increment the weight by 1", function(done){

    MarioChar.update({}, {$inc: {weight: 1}}).then(function(){
      MarioChar.findOne({name: "Mario"}).then(function(record){
          assert(record.weight === 51);
          done();
      });
    }).then(MarioChar.update({}, {$inc: {weight: -1}}));

  });

});
