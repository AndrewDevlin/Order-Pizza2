// business logic
function Pizza(toppings, size) {
  this.pizzaToppings = toppings;
  this.pizzaSize = size;
}

function sizePrice() {
  var total = 0
  if (newPizza.pizzaSize === 'small') {
    total = 5
  }
  else if (newPizza.pizzaSize === 'medium') {
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
$(document).ready(function() {
  $("form#order").submit(function(event) {
    event.preventDefault();

    var inputtedtop = ['top', 'pop']
    var inputtedsize = $("input:radio[name=size]:checked").val();
    newPizza = new Pizza(inputtedtop, inputtedsize);

    alert(newPizza.pizzaSize);
    alert(newPizza.pizzaToppings);
    alert(newPizza.price());
  });

});
