function Customer(customer){
  this.customer = customer;
  this.PizzaOrders = [];
}

function PizzaOrder(pizzaSize, ingredients, pizzaPrice){
  this.pizzaSize = pizzaSize;
  this.ingredients = ingredients;
  this.pizzaPrice = 0;
}

PizzaOrder.prototype.eachPizza = function() {
  return "Size: " + this.pizzaSize + "  Ingredients: " + this.ingredients + "  Cost: $" + this.pizzaPrice;
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
  price = parseFloat(price).toFixed(2);

  return this.pizzaPrice = price;
};


$(document).ready(function(){
  $("#add-pizza").click(function() {
   $("#new-pizzas").append('<div class="new-pizza">' +
                             '<div class="panel panel-danger form size">' +
                               '<div class="panel-heading">' +
                                '<h2 class="panel-title">Size: Small starts at $5; Medium starts at $7; and Large starts at $9</h2>' +
                               '</div>' +
                               '<div class="panel-body">' +
                                 '<div class="col-md-4">' +
                                   '<h3>Small</h3>' +
                                   '<input type="checkbox" name="new-size" value="small">' +
                                 '</div>' +
                                 '<div class="col-md-4">' +
                                  '<h3>Medium</h3>' +
                                   '<input type="checkbox" name="new-size" value="medium">' +
                                 '</div>' +
                                 '<div class="col-md-4">' +
                                   '<h3>Large</h3>' +
                                   '<input type="checkbox" name="new-size" value="large">' +
                                 '</div>' +
                               '</div>' +
                             '</div>' +
                             '<div class="panel panel-danger form ingredients">' +
                               '<div class="panel-heading">' +
                                 '<h2 class="panel-title">Ingredients:  Add $.50 for each topping.</h2>' +
                               '</div>' +
                               '<div class="panel-body">' +
                                 '<div class="col-md-2">' +
                                   '<h4>Mushrooms</h4>' +
                                   '<input type="checkbox" name="new-ingredients" value=" mushrooms">' +
                                 '</div>' +
                                 '<div class="col-md-2">' +
                                   '<h4>Olives</h4>' +
                                   '<input type="checkbox" name="new-ingredients" value=" olives">' +
                                 '</div>' +
                                 '<div class="col-md-2">' +
                                   '<h4>Sauage</h4>'+
                                   '<input type="checkbox" name="new-ingredients" value=" sausage">' +
                                 '</div>' +
                                 '<div class="col-md-2">' +
                                   '<h4>Pepperoni</h4>' +
                                   '<input type="checkbox" name="new-ingredients" value=" pepperoni">' +
                                 '</div>' +
                                 '<div class="col-md-2">' +
                                   '<h4>Onions</h4>' +
                                   '<input type="checkbox" name="new-ingredients" value=" onions">' +
                                 '</div>' +
                                 '<div class="col-md-2">' +
                                   '<h4>Extra Cheese</h4>' +
                                   '<input type="checkbox" name="new-ingredients" value=" extra cheese">' +
                                 '</div>' +
                               '</div>' +
                             '</div>' +
                            '</div>');
  });

   $('input:checkbox[name="new-size"]').on('change', function() {
     $('input:checkbox[name="new-size"]').not(this).prop('checked', false);
 });

  $("form#pizzaorder").submit(function(event){
    event.preventDefault();

    var customer = $("input#new-customer").val();
    var newCustomer = new Customer(customer);

    $(".new-pizza").each(function() {
      var pizzaSize = $(this).find('input:checkbox[name="new-size"]:checked').val();
      var ingredients = $(this).find('input:checkbox[name="new-ingredients"]:checked').map(function () {
      return this.value;
      }).get();

      var newOrder = new PizzaOrder(pizzaSize,ingredients);
      var pizzaPrice = newOrder.pizzaCost();
      this.pizzaPrice = pizzaPrice
      newCustomer.PizzaOrders.push(newOrder);
    });

    $(".customer").text(newCustomer.customer);
    newCustomer.PizzaOrders.forEach(function(pizza) {
      $("ul#pizzas").append("<li>" + pizza.eachPizza() + "</li>");
    });
    var runningCost = 0
    var totalCost = 0
    newCustomer.PizzaOrders.forEach(function(pizza) {
      runningCost = parseFloat(pizza.pizzaPrice);
      totalCost = (totalCost += runningCost);
      return parseFloat(totalCost).toFixed(2);
    });
    $(".totalcost").append("<li> $" + totalCost + "</li>");

  });
});
