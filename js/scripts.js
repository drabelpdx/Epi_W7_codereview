function PizzaOrder(pizzaSize, ingredients, pizzaPrice){
  this.pizzaSize = pizzaSize
  this.ingredients = ingredients
  this.pizzaPrice = 0

}

PizzaOrder.prototype.pizzaCost = function() {
var baseCost = 0
var price = 0

  if (this.pizzaSize === "small") {
    baseCost = 5;
  }

  if (this.pizzaSize === "medium") {
    baseCost = 7;
  }

  if (this.pizzaSize === "large") {
    baseCost = 9;
  }
  var myString = this.ingredients.valueOf();
  var myArray = myString.split(" ")
  var toppings = myArray.length;

  price = baseCost + (toppings * .50);

  return this.pizzaPrice = price;

}
