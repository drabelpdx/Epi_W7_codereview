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

  var toppings = this.ingredients.length;

  price = baseCost + (toppings * 0.49);
  price = parseFloat(price).toFixed(2);

  return this.pizzaPrice = price;
};


$(document).ready(function(){

  $('.size').change(function() {
    $(".ingredients").show();
  });

  $('.size input:checkbox[name="new-size"]').on('change', function() {
    $('.size input:checkbox[name="new-size"]').not(this).prop('checked', false);
  });

  var pizzaCount = 1
  $("#add-pizza").click(function() {
    pizzaCount++;
    var newSize = "size";
    var count = pizzaCount.toString();
    var sizeClass = newSize.concat(count);

   $("#new-pizzas").append('<div class="new-pizza">' +
                             '<div class= \ ' + sizeClass + ' \ >' +
                             '<div class="panel panel-danger form">' +
                               '<div class="panel-heading">' +
                                '<h2 class="panel-title">Size: Small starts at $5.00; Medium starts at $7.00; and Large starts at $9.00</h2>' +
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
                             '</div>' +
                             '<div class="new-ingredients">' +
                             '<div class="panel panel-danger form">' +
                               '<div class="panel-heading">' +
                                 '<h2 class="panel-title">Ingredients:  Add $.49 for each topping.</h2>' +
                               '</div>' +
                               '<div class="panel-body">' +
                                 '<div class="col-md-2">' +
                                   '<h4>Extra Cheese</h4>' +
                                   '<input type="checkbox" name="new-ingredients" value=" extra cheese">' +
                                 '</div>' +
                                 '<div class="col-md-2">' +
                                   '<h4>Pepperoni</h4>' +
                                   '<input type="checkbox" name="new-ingredients" value=" pepperoni">' +
                                 '</div>' +
                                 '<div class="col-md-2">' +
                                   '<h4>Sauage</h4>'+
                                   '<input type="checkbox" name="new-ingredients" value=" sausage">' +
                                 '</div>' +
                                 '<div class="col-md-2">' +
                                   '<h4>Canadian Bacon</h4>' +
                                   '<input type="checkbox" name="new-ingredients" value=" canadian bacon">' +
                                 '</div>' +
                                 '<div class="col-md-2">' +
                                   '<h4>Thick Crust</h4>' +
                                   '<input type="checkbox" name="new-ingredients" value=" thick crust">' +
                                 '</div>' +
                                 '<div class="col-md-2">' +
                                   '<h4>Garlic Sauce</h4>' +
                                   '<input type="checkbox" name="new-ingredients" value=" garlic sauce">' +
                                 '</div>' +
                                 '<br><br>' +
                                 '<div class="col-md-2">' +
                                   '<h4>Mushrooms</h4>' +
                                   '<input type="checkbox" name="new-ingredients" value=" mushrooms">' +
                                 '</div>' +
                                 '<div class="col-md-2">' +
                                   '<h4>Olives</h4>' +
                                   '<input type="checkbox" name="new-ingredients" value=" olives">' +
                                 '</div>' +
                                 '<div class="col-md-2">' +
                                   '<h4>Onions</h4>' +
                                   '<input type="checkbox" name="new-ingredients" value=" onions">' +
                                 '</div>' +
                                 '<div class="col-md-2">' +
                                   '<h4>Tomatoes</h4>' +
                                   '<input type="checkbox" name="new-ingredients" value=" tomatoes">' +
                                 '</div>' +
                                 '<div class="col-md-2">' +
                                   '<h4>Pineapple</h4>' +
                                   '<input type="checkbox" name="new-ingredients" value=" pineapple">' +
                                 '</div>' +
                                 '<div class="col-md-2">' +
                                   '<h4>Pine Nuts</h4>' +
                                   '<input type="checkbox" name="new-ingredients" value=" pine nuts">' +
                                 '</div>' +
                               '</div>' +
                             '</div>' +
                             '</div>' +
                            '</div>');

    $('.size2').change(function() {
      $(".new-ingredients").show();
    });

    $('.size3').change(function() {
      $(".new-ingredients").show();
    });

    $('.size4').change(function() {
      $(".new-ingredients").show();
    });

    $('.size5').change(function() {
      $(".new-ingredients").show();
    });

    $('.size6').change(function() {
      $(".new-ingredients").show();
    });

    $('.size2 input:checkbox[name="new-size"]').on('change', function() {
      $('.size2 input:checkbox[name="new-size"]').not(this).prop('checked', false);
    });

    $('.size3 input:checkbox[name="new-size"]').on('change', function() {
      $('.size3 input:checkbox[name="new-size"]').not(this).prop('checked', false);
    });

    $('.size4 input:checkbox[name="new-size"]').on('change', function() {
      $('.size4 input:checkbox[name="new-size"]').not(this).prop('checked', false);
    });

    $('.size6 input:checkbox[name="new-size"]').on('change', function() {
      $('.size6 input:checkbox[name="new-size"]').not(this).prop('checked', false);
    });

    $('.size6 input:checkbox[name="new-size"]').on('change', function() {
      $('.size6 input:checkbox[name="new-size"]').not(this).prop('checked', false);
    });
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
      return totalCost;
    });
    $(".totalcost").append("$" + totalCost);

    $("#show-order").show();
    $("div.form").hide();
    $("button").hide();

  });

  $('#show-order').click(function() {
    document.location.reload(true);
  });

});
