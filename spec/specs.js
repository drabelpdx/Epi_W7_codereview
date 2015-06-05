describe('MovieTicket', function(){
  it("Begins at a base price, decreases or increases depending on circumstances", function(){
  var testTicket = new MovieTicket("testmovie", "matinee", "senior");
    expect(testTicket.movieName).to.equal("testmovie");
    expect(testTicket.showing).to.equal("matinee");
    expect(testTicket.age).to.equal("senior");
    //expect(testTicket.firstRelease).to.equal(false);
  });

  it("prices a ticket based on showing and age choice", function(){
    var testTicket = new MovieTicket("testmovie", "matinee", "senior");
    testTicket.price();
    expect(testTicket.cost).to.equal(5);
  });

})
