// business logic
function Pizza(toppings, size) {
  this.pizzaToppings = toppings;
  this.pizzaSize = size;
}

Pizza.prototype.price = function() {
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
  return this.pizzaToppings.length + total;
}



//user interface
$(document).ready(function() {
  $("form#order").submit(function(event) {
    event.preventDefault();

    var inputtedtop = []
    $("input:checkbox[name=topping]:checked").each(function() {
       var toppingsInArray = $(this).val();
       inputtedtop.push(toppingsInArray);
    });
    var inputtedsize = $("input:radio[name=size]:checked").val();
    newPizza = new Pizza(inputtedtop, inputtedsize);

    $("#your-order").show();
    $("#your-order").append("<li>" + "Size: " + newPizza.pizzaSize + "</li>" + "<li>" + "Toppings:" + newPizza.pizzaToppings + "</li>" + "<li>Total: $" + newPizza.price() + "</li>");
  });

});
