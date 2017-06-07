console.log('loaded bro!');

fetch('http://localhost:5000/').then(function(response) {
  if(response.ok) {
    return response.json();
  }
}).then(function(data) {
  var products = data["products"];
  var source = document.getElementById("template").innerHTML;
   var template = Handlebars.compile(source);  
  console.log({products: products});
  document.getElementById("products").innerHTML = template({products: products});
});
