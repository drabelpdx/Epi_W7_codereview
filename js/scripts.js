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

  $("#add-pizza").click(function() {
   $("#new-pizzas").append('<div class="new-pizza">' +
                                 '<div class="panel panel-danger form size">' +
                                   '<div class="panel-heading">' +
                                    '<h2 class="panel-title">Size:</h2>' +
                                   '</div>' +
                                   '<div class="panel-body">' +
                                     '<div class="col-md-4">' +
                                       '<h3>Small</h3>' +
                                       '<input type="radio" name="size" value="small">' +
                                     '</div>' +
                                     '<div class="col-md-4">' +
                                      '<h3>Medium</h3>' +
                                       '<input type="radio" name="size" value="medium">' +
                                     '</div>' +
                                     '<div class="col-md-4">' +
                                       '<h3>Large</h3>' +
                                       '<input type="radio" name="size" value="large">' +
                                     '</div>' +
                                   '</div>' +
                                 '</div>' +
                                 '<div class="panel panel-danger form ingredients">' +
                                   '<div class="panel-heading">' +
                                     '<h2 class="panel-title">Ingredients:</h2>' +
                                   '</div>' +
                                   '<div class="panel-body">' +
                                     '<div class="col-md-2">' +
                                       '<h4>Mushrooms</h4>' +
                                       '<input type="checkbox" name="ingredients" value=" mushrooms">' +
                                     '</div>' +
                                     '<div class="col-md-2">' +
                                       '<h4>Olives</h4>' +
                                       '<input type="checkbox" name="ingredients" value=" olives">' +
                                     '</div>' +
                                     '<div class="col-md-2">' +
                                       '<h4>Sauage</h4>'+
                                       '<input type="checkbox" name="ingredients" value=" sausage">' +
                                     '</div>' +
                                     '<div class="col-md-2">' +
                                       '<h4>Pepperoni</h4>' +
                                       '<input type="checkbox" name="ingredients" value=" pepperoni">' +
                                     '</div>' +
                                     '<div class="col-md-2">' +
                                       '<h4>Onions</h4>' +
                                       '<input type="checkbox" name="ingredients" value=" onions">' +
                                     '</div>' +
                                     '<div class="col-md-2">' +
                                       '<h4>Extra Cheese</h4>' +
                                       '<input type="checkbox" name="ingredients" value=" extra cheese">' +
                                     '</div>' +
                                   '</div>' +
                                 '</div>');
  });

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
