function Customer(customer){
  this.customer = customer;
  this.PizzaOrders = [];
}

function PizzaOrder(pizzaSize, ingredients, pizzaPrice){
//  this.quantity = quantity;
  this.pizzaSize = pizzaSize;
  this.ingredients = ingredients;
  this.pizzaPrice = 0;
}

PizzaOrder.prototype.eachPizza = function() {
  return this.quantity + ": Size: " + this.pizzaSize + " Ingredients: " + this.ingredients;
};

PizzaOrder.prototype.pizzaCost = function() {
  var baseCost = 0;
  var price = 0;

  if (this.pizzaSize === "small") {
    baseCost = 5;
  }

  if (this.pizzaSize === "medium") {
    baseCost = 7;
  }

  if (this.pizzaSize === "large") {
    baseCost = 9;
  }
//  var myString = this.ingredients.valueOf();
//  var myArray = myString.split(" ")
  var toppings = this.ingredients.length;

  price = baseCost + (toppings * 0.50);
  price = parseFloat(price).toFixed(2)

  return this.pizzaPrice = price;
};


$(document).ready(function(){

  $("form#pizzaorder").submit(function(event){
    event.preventDefault();

    var customer = $("input#customer").val();
    var pizzaSize = $("input[name=size]:checked").val();
    //var ingredients = $("input[name=ingredients]:checked").serialize();
    var ingredients = $('input:checkbox[name="ingredients"]:checked').map(function () {
    return this.value;
}).get();

    var newCustomer = new Customer(customer);

    var newOrder = new PizzaOrder(pizzaSize,ingredients);
    newOrder.pizzaPrice = newOrder.pizzaCost();

      $(".customer").text(newCustomer.customer);
      $(".size").text(newOrder.pizzaSize);
      $(".ingredients").text(newOrder.ingredients);
      $(".cost").text("$" + newOrder.pizzaPrice);
  });
});

  //   $("#show-ticket").show();
  //   $("div.form").hide();
  //   $("button").hide();
  //

  //
  // $( ".listing" ).change(function() {
  //   $(".showtime").show();
  // });
  //
  // $( ".showtime" ).change(function() {
  //   $(".type").show();
  // });
