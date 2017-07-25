var home = function() {
  $( "#content" ).append( 
    "<h1>Mushroom Deli</h1> \
    <img src=https://i.redd.it/z8ggu41ianbz.jpg> \
    <p>The Mushroom Deli is a hip deli in downtown Mushroom Kingdom. We're known for our marinaded shiitake burger, mushroom soup, and mushroom salad.</p>"
  );
};

var menu = function() {
  $( "#content" ).append(  
    "<h1>Mushroom Deli: Menu</h1>\
    <h2>Mushroom Soup</h2>\
    <p>It's soup and has mushrooms</p>\
    <h2>Mushroom Salad</h2>\
    <p>As above</p>\
    <h2>Mushroom surprise</h2>\
    <p>It's a dish with mushrooms. How are you surprised?</p>")
};

var contact = function() {
  $( "#content" ).append( 
    "<h1>Mushroom Deli: Contact</h1> \
    <h2>Phone: (123)-456-7890</h2> \
    <h2>email:Mushroom@deli.com</h2>"
  );
};

var clearContent = function() {
  $( "#content" ).empty();
};

var tabMenu = function() {
  home();
  $( "#home-link" ).click(function( eventObject ) {
    eventObject.preventDefault();
    clearContent();
    home();
  });
  $( "#menu-link" ).click(function(){
    clearContent();
    menu();
  });

  $( "#contact-link" ).click(function(){
    clearContent();
    contact();
  });

};
$( document ).ready( tabMenu );