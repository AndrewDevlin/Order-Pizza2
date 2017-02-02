function Pizza(toppings, size) {
  this.pizzaToppings = toppings;
  this.pizzaSize = size;
}

Pizza.prototype.pizzaPrice = function() {
  var sizePrice = 0;
  if (newPizza.pizzaSize === 'small') {
    sizePrice = 5;
  }
  else if (newPizza.pizzaSize === 'medium') {
    sizePrice = 10;
  }
  else {
    sizePrice = 15;
  }
  return this.pizzaToppings.length + sizePrice;
}

$(document).ready(function() {

  var totalPrice = 0;

  $("form#order").submit(function(event) {
    event.preventDefault();

    var inputtedToppings = []
    $("input:checkbox[name=topping]:checked").each(function() {
       var toppingsInArray = $(this).val();
       inputtedToppings.push(toppingsInArray);
    });
    var inputtedSize = $("input:radio[name=size]:checked").val();
    newPizza = new Pizza(inputtedToppings, inputtedSize);
    totalPrice += newPizza.pizzaPrice();

    $("#your-order").show();
    $("#your-order").append("<li>" + "Size: " + newPizza.pizzaSize + "</li>" + "<li>" + "Toppings:" + newPizza.pizzaToppings + "</li>" + "<li>Total: $" + newPizza.pizzaPrice() + "</li>" + "<li>" + "</li>");

    $("#running-total").text("Your total: $" + totalPrice);
  });
});
