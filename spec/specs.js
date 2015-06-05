describe('PizzaOrder', function(){
  it("returns the correct size ordered", function(){
  var testOrder = new PizzaOrder("large");
    expect(testOrder.pizzaSize).to.equal("large");
  });

  it("return the correct ingredients ordered", function(){
  var testOrder = new PizzaOrder("large",["olives","mushrooms","sausage"]);
    expect(testOrder.ingredients).to.eql(["olives","mushrooms","sausage"]);
  });

})
