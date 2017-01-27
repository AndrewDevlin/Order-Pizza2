// business logic


function Pizza(toppings, size) {
  this.pizzaToppings = toppings;
  this.pizzaSize = size;
}

function sizePrice() {
  var total = 0
  if (newPizza.pizzaSize === 's') {
    total = 5
  }
  else if (newPizza.pizzaSize === 'm') {
    total = 10
  }
  else {
    total = 15
  }
  return total
}

Pizza.prototype.price = function() {
  return this.pizzaToppings.length + sizePrice();
}

//user interface
var inputtedtop = ['top', 'pop']
var inputtedsize ='l'

var newPizza = new Pizza(inputtedtop, inputtedsize);

alert(newPizza.pizzaSize);
alert(newPizza.pizzaToppings);
alert(newPizza.price());
