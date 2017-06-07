console.log('loaded bro!');

fetch('http://localhost:5000/').then(function(response) {
  if(response.ok) {
    return response.json();
  }
}).then(function(data) {
  var products = data["products"];
  var source = document.getElementById("template").innerHTML;
   var template = Handlebars.compile(source);  
  document.getElementById("products").innerHTML = template({products: products});
}).then(function() {
  var elem = document.querySelector('.grid');
  var msnry = new Masonry( elem, {
    itemSelector: '.grid-item',
    gutter: 10,
    columnWidth: 200
  });
});
