describe('PizzaOrder', function(){
  it("returns the correct size ordered", function(){
    var testOrder = new PizzaOrder("large");
    expect(testOrder.pizzaSize).to.equal("large");
  });

  it("return the correct ingredients ordered", function(){
    var testOrder = new PizzaOrder("large",["olives","mushrooms","sausage"]);
    expect(testOrder.ingredients).to.eql(["olives","mushrooms","sausage"]);
  });

  it("return the correct price for pizza ordered", function(){
    var testOrder = new PizzaOrder("large", ["olives", "mushrooms", "sausage"]);
    testOrder.pizzaCost();
    expect(testOrder.pizzaPrice).to.equal('10.50');
  });
});

describe('Customer', function(){
  it("returns the customer", function(){
    var testCustomer = new Customer("Bobo Smith");
    expect(testCustomer.customer).to.equal("Bobo Smith");
  });

  it("attaches an order and returns the customer", function(){
    var testCustomer = new Customer("Bobo Smith");
    var testOrder = new PizzaOrder("large",["olives","mushrooms","sausage"]);
    testCustomer.PizzaOrders.push(testOrder);
    expect(testCustomer.PizzaOrders).to.eql(["large", ["olives", "mushrooms", "sausage"]]);
  });
});
