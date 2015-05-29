describe("findAndReplace", function() {

  it("will return a string", function() {
    expect(findAndReplace("Thing One and Thing Two", "Two", "Monster")).to.be.a("string");
  });

  it("will find a word in the string and replace it with another word", function() {
    expect(findAndReplace("the cat in the hat", "cat", "alligator")).to.equal("the alligator in the hat");
  });

});
