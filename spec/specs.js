describe('PizzaOrder', function(){
  it("returns the correct size ordered", function(){
  var testOrder = new PizzaOrder("large");
    expect(testOrder.pizzaSize).to.equal("large");
  });

})
